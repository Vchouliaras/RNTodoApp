// Actions are payloads of information that send data
// from your application to your store. They are the
// only source of information for the store.

// {
//   type: ADD_TODO,
//   text: 'Build my first Redux app'
// }

import uuid from 'uuid'

import { default as ActionTypes } from './Types'

export const addTodo = text => {
  return {
    type: ActionTypes.ADD_TODO,
    payload: {
      text: text,
      id: uuid.v1(),
      time: Date.now(),
      completed: false,
    }
  }
}

export const completeTodo = id => ({
  type: ActionTypes.COMPLETE_TODO,
  payload: { id }
})

export const deleteActiveTodo = id => ({
  type: ActionTypes.DELETE_ACTIVE_TODO,
  payload: { id }
})

export const deleteCompletedTodo = id => ({
  type: ActionTypes.DELETE_COMPLETED_TODO,
  payload: { id }
})