import { combineReducers } from 'redux'
import { api } from '../constants'

const loading = (loading = false, action) => {
    switch (action.type) {
        case api.HOMEPAGE_CONTENT_FETCH:
            return true
        case api.HOMEPAGE_CONTENT_FETCH_SUCCESS:
            return false
        default:
            return loading
    }
}

const loaded = (loaded = false, action) => {
    return action.type === api.HOMEPAGE_CONTENT_FETCH_SUCCESS ? true : loaded
}

const error = (error = null, action) => {
    return action.type === api.HOMEPAGE_CONTENT_FETCH_FAIL
        ? action.error
        : error
}

const content = (content = {}, action) => {
    switch (action.type) {
        case api.HOMEPAGE_CONTENT_FETCH_SUCCESS:
            const data = action.data.data.items[0].fields
            return {
                ...data,
                image: data.image.fields.file,
                imageMobile: data.imageMobile.fields.file,
                categories: data.categories.map(i => {
                    return {
                        ...i.fields,
                        image: i.fields.image.fields.file,
                        imageMobile: i.fields.imageMobile.fields.file,
                    }
                }),
            }
        default:
            return content
    }
}

const homepage = combineReducers({
    loading,
    loaded,
    error,
    content,
})

export default homepage
