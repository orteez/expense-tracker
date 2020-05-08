import React, {createContext, useReducer} from 'react'
import axios from 'axios'
import AppReducer from './AppReducer'

// initial state
const initialState = {
  transactions: [],
  currency: "USD",
  error: null
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const getTransactions = async () => {
    try {
      const res = await axios.get('/api/transaction');
      console.log(res)
      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }

  const deleteTransaction = async (id) => {
    try {
      const res = await axios.delete(`/api/transaction/${id}`);
      console.log(res)
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }

  const addTransaction = async (transaction) => {
    try {
      const res = await axios.post('/api/transaction', transaction);
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }

  const editTransaction = async (transaction) => {
    try {
      const res = await axios.put(`/api/transaction/${transaction.id}/edit`, transaction);
      console.log(res)
      dispatch({
        type: 'EDIT_TRANSACTION',
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.response.data.error
      });
    }
  }

  const changeCurrency = (currency) => {
    dispatch({
      type: "CHANGE_CURRENCY",
      payload: currency
    })
  }
  
  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions, 
      currency: state.currency,
      deleteTransaction, 
      addTransaction, 
      changeCurrency,
      getTransactions,
      editTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  )
}