const initialState = {
  details:{},
  showDate: [],
  showLocation: [],
  availCinema: [],
  // isLoading: true,
  // isDateLoading: true,
  // isLocationLoading: true,
  // isCinemaLoading: true,
}

function movieReducer(state=initialState, action){
  switch(action.type){
      case 'GET_MOVIE': {
          return {
              ...state,
              details: action.payload
          }
      }
      case 'GET_SHOWDATE': {
          return {
              ...state,
              showDate: action.payload
          }
      }
      case 'GET_SHOWLOCATION': {
          return {
              ...state,
              showLocation: action.payload
          }
      }
      case 'GET_CINEMAS': {
          return {
              ...state,
              availCinema: action.payload
          }
      }
      // case 'TOGGLE_MOVIE_LOADING': {
      //     return {
      //         ...state,
      //         isLoading: !state.isLoading
      //     }
      // }
      // case 'TOGGLE_CUSTOM_LOADING': {
      //     return {
      //         ...state,
      //         [action.payload.loadingName]: !state[action.payload.loadingName]
      //     }
      // }
      default: {
          return {
              ...state
          }
      }
  }
}

export default movieReducer