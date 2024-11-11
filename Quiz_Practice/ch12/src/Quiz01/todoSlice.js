import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
   name: 'todos',
   initialState: [],
   reducers: {
      addTodo: (state, action) => state.concat({ id: Date.now(), text: action.payload }),
      removeTodo: (state, action) => state.filter((todo) => todo.id !== action.payload), //return을 하지 않으면 그냥 배열 그 자체만 만들어지므로 반드시 리턴
   },
})

export default todoSlice.reducer
export const { addTodo, removeTodo } = todoSlice.actions
