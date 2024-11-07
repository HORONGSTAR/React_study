const initialState = { todos: [] }

function todoReducer(state = initialState, action) {
   switch (action.type) {
      case 'add':
         return { ...state, todos: [...state.todos, { id: Date.now(), text: action.value }] }

      case 'delete':
         return { ...state, todos: state.todos.filter((todo) => todo.id !== action.value) }
      default:
         return state
   }
}

export default todoReducer
