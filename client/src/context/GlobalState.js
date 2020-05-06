import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

// initial state
const initialState = {
  transactions: [],
  currency: "USD"
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    })
  }
  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    })
  }

  const changeCurrency = (currency) => {
    dispatch({
      type: "CHANGE_CURRENCY",
      payload: currency
    })
  }
  return (
    <GlobalContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction, changeCurrency,  currency: state.currency}}>
      {children}
    </GlobalContext.Provider>
  )
}