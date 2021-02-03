import {combineReducers} from 'redux'
import registerReducer from './register'
import authReducer from './auth'

const reducer = combineReducers ({
  auth:authReducer,
  register:registerReducer
})

export default reducer