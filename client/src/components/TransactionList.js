import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

export const TransactionList = () => {
  const {transactions} = useContext(GlobalContext);
  console.log(transactions)
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
        <li key={transaction.id} className={transaction.amount > 0? "plus" :"minus"}>{transaction.text}<span>{transaction.amount}</span><button className="delete-btn">Delete</button></li>
        ))}
      </ul>
    </>
  )
}
