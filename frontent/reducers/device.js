import { combineReducers } from 'redux'
import { api } from '../constants'

const desktop = (desktop = false, action) => {
    return action.type === api.SET_DEVICE ? action.width >= 1022 : desktop
}

const tablet = (tablet = false, action) => {
    return action.type === api.SET_DEVICE ? action.width < 1021 : tablet
}

const mobile = (mobile = false, action) => {
    return action.type === api.SET_DEVICE ? action.width < 750 : mobile
}

const homepage = combineReducers({
    desktop,
    tablet,
    mobile,
})

export default homepage
