import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
   name: 'counterSlice', //slice의 이름
   initialState: { value: 0 },
   reducers: {
      up: (state, action) => {
         console.log(action)
         state.value += action.payload
      },
      down: (state, action) => {
         state.value -= action.payload
      },
   },
})

export default counterSlice.reducer //리듀서를 내보냄
export const { up, down } = counterSlice.actions //reducers안에 정의한 up, down 함수를 내보냄
