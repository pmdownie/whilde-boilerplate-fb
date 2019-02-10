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

const homepage = combineReducers({
    loading,
    loaded,
    error,
})

export default homepage
