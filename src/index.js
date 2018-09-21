import React from 'react'
import { Provider } from 'react-redux'

import TodoStore from './redux/store/TodoStore'
import AppTodoNavigation from './routes/Todos'

const { Store } = TodoStore()

const App = () => (
  <Provider store={Store}>
    <AppTodoNavigation />
  </Provider>
)

export default App