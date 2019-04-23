import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import reducer from './reducer'
import initialState from './states'

const initializeStore = () => {
  const middleware = [thunkMiddleware, createLogger()]
  return createStore(
    reducer,
    compose(applyMiddleware(...middleware))
  )
}

export default initializeStore
