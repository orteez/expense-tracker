import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';

export const Transaction = (props) => {
  const {deleteTransaction} = useContext(GlobalContext);

  const { id, text, amount } = props.transaction;
  const name = amount > 0 ? "plus" : "minus";
  return (
    <li className={name}>
      {text}
      <span>{amount.toLocaleString('en-US', { style: 'currency', currency: 'USD', })} </span>
      <button className="delete-btn" onClick={() => deleteTransaction(id)}>x</button>
    </li>
  )
}
