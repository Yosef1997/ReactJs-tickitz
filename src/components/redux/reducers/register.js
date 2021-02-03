const initialState = {
  results: null,
  errorMsg: ''
}

const registerReducer = (state=initialState, action) => {
  switch(action.type){
    case 'REGISTER': {
      return {
        ...state,
        results: action.payload
      }
    }
    case 'SET_REGISTER_MESSAGE': {
      return {
        ...state,
        errorMsg: action.payload
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}

export default registerReducer