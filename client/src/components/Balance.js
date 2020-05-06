import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

export const Balance = () => {
  const {transactions} = useContext(GlobalContext);
  const balance = transactions.reduce( (total, transaction) => (total += transaction.amount) , 0)
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">{balance.toLocaleString('en-US', { style: 'currency', currency: 'USD', })}</h1>
    </>
  )
}
