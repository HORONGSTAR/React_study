const initialState = { count: 0 }

function counterReducer(state = initialState, action) {
   switch (action.type) {
      case 'increment':
         const upState = { ...state, count: state.count + 1 }
         return upState
      case 'decrement':
         const downState = { ...state, count: state.count - 1 }
         return downState
      default:
         return state
   }
}

export default counterReducer
