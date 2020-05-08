export default (state, action) => {
  switch(action.type) {
    case "GET_TRANSACTIONS":
      return {
        ...state,
        transactions: action.payload
      }
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      }
    case "EDIT_TRANSACTION":
      return {
        ...state, 
        transactions: state.transactions.map((transaction) => 
          transaction.id === action.payload.id? action.payload : transaction
        )
      }
    case "CHANGE_CURRENCY":
      return {
          ...state,
          currency: action.payload
      }
    case "TRANSACTION_ERROR":
      return {
        ...state,
        error: action.payload
      }
    default: return state;
  }
}