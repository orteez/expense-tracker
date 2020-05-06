import React, {useState, useContext} from 'react'
import uuid from 'react-uuid'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {
  const {addTransaction} = useContext(GlobalContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const onTextChange = (e) => {setText(e.target.value)};
  const onAmountChange = (e) => {setAmount(e.target.value)};

  const onAddTransaction = (e) => {
    e.preventDefault();
    const transaction = {
      id: uuid(),
      text,
      amount: +amount // change type to number
    }
    console.log(transaction)
    addTransaction(transaction);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onAddTransaction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter text..." value={text} onChange={onTextChange} />
        </div>
        <div className="form-control">
          <label htmlFor="amount"> Amount <span style={{fontSize: ".75em"}}>(negative - expense, positive - income)</span> </label>
          <input type="number" placeholder="Enter amount..." value={amount} onChange={onAmountChange} />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}
