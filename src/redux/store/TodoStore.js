
import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import logger from 'redux-logger'

import Reducer from '../reducers'


const middlewares = [ logger ]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
  key: 'todos',
  storage: AsyncStorage,
}

export default () => {

  const persistedReducer = persistReducer(persistConfig, Reducer)

  const Store = createStore(persistedReducer,
    // We need to compose enhancer
    // since createStore can accept
    // only one
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  )

  const Persistor = persistStore(Store)

  return {
    Store,
    Persistor
  }
}