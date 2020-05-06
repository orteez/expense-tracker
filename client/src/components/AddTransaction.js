import React, {useState} from 'react'

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const onTextChange = (e) => {setText(e.target.value)};
  const onAmountChange = (e) => {setAmount(e.target.value)};

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
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
