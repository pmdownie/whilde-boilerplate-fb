import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

// create an object from the default data
const defaultState = {}

const middlewares = [thunk]

const enhancers = compose(applyMiddleware(...middlewares))

const initStore = (initialState = defaultState) =>
    createStore(rootReducer, initialState, enhancers)

export default initStore
