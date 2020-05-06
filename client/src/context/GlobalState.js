import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

// initial state
const initialState = {
  transactions: [
    {id: 1, amount: 50, text: "books"},
    {id: 2, amount: -1, text: "dinner"},
    {id: 3, amount: 11, text: "tshirt"},
    {id: 4, amount: -20, text: "pepsi"}
  ]
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return (
    <GlobalContext.Provider value={{transactions: state.transactions}}>
      {children}
    </GlobalContext.Provider>
  )
}