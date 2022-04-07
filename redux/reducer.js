import { combineReducers } from 'redux'

import socialsReducer from './socialsSlice'
import formReducer from './formSlice'
import userReducer from './userSlice'

const rootReducer = combineReducers({
    socials: socialsReducer,
    form: formReducer,
    user: userReducer,    
})

export default rootReducer
