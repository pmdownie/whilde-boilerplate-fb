import { combineReducers } from 'redux'
import homepage from './homepage'
import device from './device'
import info from './info'

export default combineReducers({
    homepage,
    device,
    info,
})
