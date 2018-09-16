// Actions are payloads of information that send data
// from your application to your store. They are the
// only source of information for the store.

// {
//   type: ADD_TODO,
//   text: 'Build my first Redux app'
// }

import { default as ActionTypes } from './Types'

export const addTodo = text => {
  return {
    type: ActionTypes.ADD_TODO,
    payload: {
      text: text,
      time: Date.now(),
      type: 'active',
      completed: false,
    }
  }
}

export const completeTodo = index => ({
  type: ActionTypes.COMPLETE_TODO,
  payload: index
})

export const deleteActiveTodo = index => ({
  type: ActionTypes.DELETE_ACTIVE_TODO,
  payload: index
})

export const deleteCompletedTodo = index => ({
  type: ActionTypes.DELETE_ACTIVE_TODO,
  payload: index
})