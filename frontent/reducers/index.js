import { combineReducers } from 'redux'
import homepage from './homepage'
import device from './device'
import info from './info'
import menu from './menu'
import categories from './categories'

export default combineReducers({
    homepage,
    device,
    info,
    menu,
    categories,
})
