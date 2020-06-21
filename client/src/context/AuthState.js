import React, {createContext, useReducer} from 'react'
import axios from 'axios'
import AuthReducer from './AuthReducer'

// initial state
const initialState = {
  user: null,
  error: null
}

// Create Context
export const AuthContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState)

  const signUp = async (user) => {
    try {
      const res = await axios.post('/api/auth/signup', user);
      console.log(res)
      dispatch({
        type: 'SIGN_UP',
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: 'AUTH_ERROR',
        payload: err.response.data.error
      });
    }
  }

  const signIn = async (user) => {
    try {
      const res = await axios.post('/api/auth/signin', user);
      console.log(res)
      dispatch({
        type: 'SIGN_IN',
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: 'AUTH_ERROR',
        payload: err.response.data.error
      });
    }
  }

  const logout = async () => {
    try {
      const res = await axios.post('/api/auth/logout', state.user);
      console.log(res)
      dispatch({
        type: 'LOGOUT',
        payload: null
      });
    } catch (err) {
      dispatch({
        type: 'AUTH_ERROR',
        payload: err.response.data.error
      });
    }
  }



  return (
    <AuthContext.Provider value={{
      user: state.user, 
      error: state.error,
      signIn,
      signUp,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  )
}