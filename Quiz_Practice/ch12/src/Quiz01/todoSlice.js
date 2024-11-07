import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
   name: 'todos',
   initialState: [],
   reducers: {
      addTodo: (state, action) => state.concat({ id: Date.now(), text: action.payload }),
      removeTodo: (state, action) => state.filter((todo) => todo.id !== action.payload),
   },
})

export default todoSlice.reducer
export const { addTodo, removeTodo } = todoSlice.actions
