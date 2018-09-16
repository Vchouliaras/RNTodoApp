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

 const initialState = [{
  'text': 'A new todo',
  'time': Date.now(),
  'type': 'active',
  'completed': false,
}]

 const TodoReducer = (state = initialState, action) => {
   switch (action.type) {
     case ActionTypes.ADD_TODO:
       return [
         action.payload,
        ...state
      ]
   }

   return state
 }

 export default TodoReducer