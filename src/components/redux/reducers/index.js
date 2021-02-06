import {combineReducers} from 'redux'
import registerReducer from './register'
import authReducer from './auth'
import movieReducer from './movieDetail'

const reducer = combineReducers ({
  auth:authReducer,
  register:registerReducer,
  movieDetail:movieReducer
})

export default reducer