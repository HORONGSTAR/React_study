const initialState = { value: 0 }

function conuterReducer(state = initialState, action) {
   if (action.type === 'up') {
      return { ...state, value: state.value + action.step }
   }
   if (action.type === 'down') {
      return { ...state, value: state.value - action.step }
   }
   return state
}

export default conuterReducer
