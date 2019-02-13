import { combineReducers } from 'redux'
import { api } from '../constants'

const open = (open = false, action) => {
    return action.type === api.MENU_DRAWER_TOGGLE ? action.open : open
}

export default combineReducers({
    open,
})
