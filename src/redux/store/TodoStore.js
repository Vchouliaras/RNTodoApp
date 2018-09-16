import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

import Reducer from '../reducers'


const middlewares = [ logger ]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const Store = createStore(
  Reducer,
  // We need to compose enhancer
  // seens createStore can accept
  // only one
  composeEnhancers(
    applyMiddleware(...middlewares)
  )
)

export default Store