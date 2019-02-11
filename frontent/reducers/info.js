import { combineReducers } from 'redux'
import { api } from '../constants'

const open = (open = false, action) => {
    return action.type === api.INFO_DRAWER_TOGGLE ? action.open : open
}

const content = (content = {}, action) => {
    switch (action.type) {
        case api.INFO_CONTENT_FETCH_SUCCESS:
            return action.data.items[0].fields
        default:
            return content
    }
}

const loading = (loading = false, action) => {
    switch (action.type) {
        case api.INFO_CONTENT_FETCH:
            return true
        case api.INFO_CONTENT_FETCH_SUCCESS:
            return false
        default:
            return loading
    }
}

const loaded = (loaded = false, action) => {
    return action.type === api.INFO_CONTENT_FETCH_SUCCESS ? true : loaded
}

const error = (error = null, action) => {
    return action.type === api.INFO_CONTENT_FETCH_FAIL ? action.error : error
}

export default combineReducers({
    open,
    content,
    loading,
    loaded,
    error,
})
