import { configureStore } from '@reduxjs/toolkit'
import socialsSliceReducer from '../components/socialsSlice'

const store = configureStore({
    reducer: socialsSliceReducer,
})

export default store