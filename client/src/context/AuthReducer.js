export default (state, action) => {
    switch(action.type) {
      case "SIGN_UP":
        return {
          ...state,
          user: action.payload
        }
        case "SIGN_IN":
        return {
            ...state,
            user: action.payload
        }
        case "LOGOUT":
        return {
            ...state,
            user: null
        }
      case "AUTH_ERROR":
        return {
          ...state,
          error: action.payload
        }
      default: return state;
    }
  }