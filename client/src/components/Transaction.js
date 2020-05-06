import React from 'react'

export const Transaction = (props) => {
  const { text, amount } = props.transaction;
  const name = amount > 0 ? "plus" : "minus";
  return (
    <li className={name}>
      {text}
      <span>{amount.toLocaleString('en-US', { style: 'currency', currency: 'USD', })} </span>
      <button className="delete-btn">x</button>
    </li>
  )
}
