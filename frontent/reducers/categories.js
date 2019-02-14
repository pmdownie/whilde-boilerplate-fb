import { combineReducers } from 'redux'
import { api } from '../constants'

const reduceArtworks = subcategories =>
    subcategories.reduce((arr, subcategory) => {
        let artworks = []
        subcategory.fields.artworks.map(i => {
            return artworks.push({
                ...i.fields,
                largeImage: i.fields.largeImage.fields.file,
                smallImage: i.fields.smallImage.fields.file,
                subcategory: subcategory.fields.title,
            })
        })
        return [...arr, ...artworks]
    }, [])

const items = (items = {}, action) => {
    switch (action.type) {
        case api.CATEGORY_CONTENT_FETCH_SUCCESS:
            const data = action.data.items[0].fields
            const artworks = reduceArtworks(data.subCategories)

            return {
                ...items,
                [data.id]: {
                    ...data,
                    artworks,
                    subCategories: data.subCategories.map(i => {
                        return { ...i.fields, length: i.fields.artworks.length }
                    }),
                },
            }
        default:
            return items
    }
}

const loading = (loading = false, action) => {
    switch (action.type) {
        case api.CATEGORY_CONTENT_FETCH:
            return true
        case api.CATEGORY_CONTENT_FETCH_SUCCESS:
            return false
        default:
            return loading
    }
}

const loaded = (loaded = false, action) => {
    switch (action.type) {
        case api.CATEGORY_CONTENT_FETCH:
            return false
        case api.CATEGORY_CONTENT_FETCH_SUCCESS:
            return true
        default:
            return loaded
    }
}

const error = (error = null, action) => {
    return action.type === api.CATEGORY_CONTENT_FETCH_FAIL
        ? action.error
        : error
}

export default combineReducers({
    items,
    loading,
    loaded,
    error,
})
