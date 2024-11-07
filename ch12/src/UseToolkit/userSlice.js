import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
   name: 'user', //slice이름지정
   initialState: { name: '', age: '' }, //state초기값
   reducers: {
      setName: (state, action) => {
         state.name = action.payload
      },
      setAge: (state, action) => {
         state.age = action.payload
      },
   },
})

export default userSlice.reducer
export const { setName, setAge } = userSlice.actions
