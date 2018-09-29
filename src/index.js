import React from 'react'
import { Provider } from 'react-redux'

import TodoStore from './redux/store/TodoStore'
import AppTodoNavigation from './routes/Todos'

const { Store, Persistor } = TodoStore()

/**
  // Log messages from the Bridge
  import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue';
  MessageQueue.spy(true);
 */

/**
  // Clear persist store
  */
 Persistor.purge()

const App = () => (
  <Provider store={Store}>
    <AppTodoNavigation />
  </Provider>
)

export default App