import axios from 'axios'
import { api, routes } from '../constants'

const loadingContent = type => {
    return {
        type: api[`${type}_CONTENT_FETCH`],
    }
}

const loadingContentSuccess = (type, data) => {
    return {
        type: api[`${type}_CONTENT_FETCH_SUCCESS`],
        data,
    }
}

const loadingContentFail = (type, error) => {
    console.log(error)
    return {
        type: api[`${type}_CONTENT_FETCH_FAIL`],
        error,
    }
}

export const fetchContent = type => async dispatch => {
    dispatch(loadingContent(type))
    try {
        const data = await axios.get(
            `http://localhost:2424/fetch${routes[type]}`
        )
        dispatch(loadingContentSuccess(type, data.data))
        return data.data
    } catch (error) {
        dispatch(loadingContentFail(type, error))
    }
}
