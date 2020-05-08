import React, {useContext, useState} from 'react'
import {GlobalContext} from '../context/GlobalState';
import {Currency} from './Currency'

export const Transaction = (props) => {
  const {deleteTransaction, editTransaction} = useContext(GlobalContext);
  const [isEditting, setEdit] = useState(false);

  const { id, text, amount } = props.transaction;
  const [editText, setText] = useState(text);
  const [editAmount, setAmount] = useState(amount);

  const onSubmitEdit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: id,
      text: editText,
      amount: +editAmount
    }
    console.log(newTransaction)
    editTransaction(newTransaction);

    setEdit(false);
  }

  const name = amount > 0 ? "plus" : "minus";

  if (!isEditting) {
    return (
      <li className={name}>
        {text}
        <span><Currency amount={amount}/> </span>
        <button className="delete-btn" onClick={() => deleteTransaction(id)}>x</button>
        <button className="edit-btn" onClick={() => setEdit(true)}>edit</button>
      </li>
    )
  } else {
    return (
      <li className={name}>
        <form style={{display: "inherit"}} onSubmit={(e)=> onSubmitEdit(e)}>

        <input type="text" value={editText} onChange={(e) => setText(e.target.value)}/>
        <input type="number" value={editAmount} onChange={(e) => setAmount(e.target.value)}/>
        <button>submit</button>
        </form>
        <button className="delete-btn" onClick={() => deleteTransaction(id)}>x</button>
        <button className="edit-btn" onClick={() => setEdit(false)}>edit</button>
      </li>
    )
  }
}
