import http from '../../helper/http'

export const login = (email, password) => {
  return async dispatch => {
      const params = new URLSearchParams();
      params.append('email', email)
      params.append('password', password)
      try {
        dispatch({
          type: 'SET_LOGIN_MESSAGE',
          payload: ''
        })
        const results = await http().post(`/auth/login`, params)
        dispatch({
          type: 'LOGIN',
          payload: results.data.token
         })
      } catch(err) {
        const {message} = err.response.message
        dispatch({
          type: 'SET_LOGIN_MESSAGE',
          payload: message
        })
      }
    }
}
export const autoLogin = (payload) => ({
  type:'LOGIN',
  payload
})