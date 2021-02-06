import http from '../../helper/http'

export const getmovie = payload => {
  return async dispatch => {
    const dataMovie = await http().get(`/movies`)
    dispatch({
      type:'GET_MOVIE',
      payload: dataMovie.data.results
    })
  }
}

export const getShowDate = payload => {
  return dispatch => {
    dispatch({
      type:'GET_SHOWDATE',
      payload
    })
  }
}

export const getShowLocation = payload => {
  return dispatch => {
    dispatch({
      type:'GET_SHOWLOCATION',
      payload
    })
  }
}

export const getCinemas = payload => {
  return dispatch => {
    dispatch({
      type:'GET_CINEMAS',
      payload
    })
  }
}