import React from 'react';
import { Header } from './Header'
import { Balance } from './Balance'
import { Expenses } from './Expenses'
import { TransactionList } from './TransactionList'
import { AddTransaction } from './AddTransaction'

import { ChangeCurrency } from './ChangeCurrency'

function Tracker() {
  return (
      <div className="expense-container">
        <Header title="Expense Tracker"/>
        <Balance />
        <Expenses />
        <TransactionList />
        <AddTransaction />
        <ChangeCurrency/>
      </div>
  );
}

export default Tracker;
