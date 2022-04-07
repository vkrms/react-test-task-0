import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    submitted: false
  },
  reducers: {
    submit(state) {
      state.submitted = true
    }
  }
})

export const { submit } = formSlice.actions

export default formSlice.reducer
