import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import {Currency} from './Currency'
export const Balance = () => {
  const {transactions} = useContext(GlobalContext);
  const balance = transactions.reduce( (total, transaction) => (total += transaction.amount) , 0) || 0;
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance"><Currency amount={balance}/></h1>
    </>
  )
}
