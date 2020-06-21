import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

import {Input, FormGroup, Form, Label} from 'reactstrap'

export const AddTransaction = () => {
  const {addTransaction} = useContext(GlobalContext);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const onTextChange = (e) => {setText(e.target.value)};
  const onAmountChange = (e) => {setAmount(e.target.value)};

  const onAddTransaction = (e) => {
    e.preventDefault();
    const transaction = {
      text,
      amount: +amount // change type to number
    }
    console.log(transaction)
    addTransaction(transaction);
    setText("")
    setAmount(0)
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <Form onSubmit={onAddTransaction}>
        <FormGroup>
          <Label for="exampleEmail">Text</Label>
          <Input type="text" placeholder="Enter text..." value={text} onChange={onTextChange} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Amount <span style={{fontSize: ".75em"}}>(negative - expense, positive - income)</span></Label>
          <Input type="number" placeholder="Enter amount..." value={amount} onChange={onAmountChange} />
        </FormGroup>
        <button className="btn">Add transaction</button>
      </Form>
    </>
  )
}
