/**
 * In Redux, all the application state is
 * stored as a single object. It's a good idea
 * to think of its shape before writing any code.
 * What's the minimal representation of your app's
 * state as an object?
 *
 * It's very important that the reducer stays pure.
 * Given the same arguments, it should calculate
 * the next state and return it. No surprises.
 * No side effects. No API calls. No mutations.
 * Just a calculation.
 */

 import { default as ActionTypes } from '../actions/Types'

 const initialState = []

/**
 *
 * Sample of the redux
 *
 * [
 *  {
 *   id
 *   text
 *   time
 *   completed
 *  }
 * ]
 */

 const TodoReducer = (state = initialState, action) => {
   switch (action.type) {

    case ActionTypes.ADD_TODO:
      return [
        action.payload,
        ...state
      ]

    case ActionTypes.DELETE_ACTIVE_TODO:
      return state
        .filter(todo => todo.id !== action.payload.id)

    case ActionTypes.COMPLETE_TODO:
      return state
        .map(todo => {
          if (todo.id === action.payload.id) {
            todo.completed = true
          }
          return todo
        })

    case ActionTypes.DELETE_COMPLETED_TODO:
      return state
      .filter(todo => todo.id !== action.payload.id)
   }

   return state
 }

 export default TodoReducer