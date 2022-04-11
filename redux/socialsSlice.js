import { createSlice } from '@reduxjs/toolkit'

export const socialsSlice = createSlice({
  name: 'socials',
  initialState: {
    shared: false
  },
  reducers: {
    share(state) {
      state.shared = true
    }
  }
})

export const { share } = socialsSlice.actions

export default socialsSlice.reducer
