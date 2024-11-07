import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
   name: 'auth',
   initialState: { isAuthenticated: false },
   reducers: {
      login: (state, action) => (state = { isAuthenticated: action.payload }),
      logout: (state, action) => (state = { isAuthenticated: action.payload }),
   },
})

export default authSlice.reducer
export const { login, logout } = authSlice.actions
