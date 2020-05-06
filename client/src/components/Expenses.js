import React, {useContext} from 'react'
import {Currency} from './Currency'
import {GlobalContext} from '../context/GlobalState';

export const Expenses = () => {
  const {transactions} = useContext(GlobalContext);
  const income = transactions
                  .filter(transaction => transaction.amount > 0)
                  .reduce((acc, transaction) => (acc += transaction.amount), 0);
  const expense = transactions
                    .filter(transaction => transaction.amount < 0)
                    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">
          +<Currency amount={income}/>
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">
          <Currency amount={expense}/>
        </p>
      </div>
    </div>
  )
}
