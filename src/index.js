import React from 'react'
import { Provider } from 'react-redux'

import TodoStore from './redux/store/TodoStore'
import AppTodoNavigation from './routes/Todos'

const App = () => (
  <Provider store={TodoStore}>
    <AppTodoNavigation />
  </Provider>
)

export default App