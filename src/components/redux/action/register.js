import {default as axios} from 'axios'
const {REACT_APP_API_URL: API_URL} = process.env

export const register = (email, password) => {
  return async dispatch => {
      const params = new URLSearchParams();
      params.append('email', email)
      params.append('password', password)
      try {
        const results = await axios.post(`${API_URL}/auth/register`, params)
        dispatch({
          type: 'REGISTER',
          payload: results.data.result
         })
      } catch(err) {
        const {message} = err.response.data
        console.log(message)
        dispatch({
          type: 'SET_REGISTER_MESSAGE',
          payload: message
        })
      }
    }
}