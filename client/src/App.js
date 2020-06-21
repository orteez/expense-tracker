import React from 'react';
import './App.css';
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { Expenses } from './components/Expenses'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'

import { ChangeCurrency } from './components/ChangeCurrency'

import {GlobalProvider} from './context/GlobalState';
import AppNavbar from './components/AppNavbar';

function App() {
  return (
    <GlobalProvider>
      <AppNavbar/>
      <div className="expense-container">
        <Header title="Expense Tracker"/>
        <Balance />
        <Expenses />
        <TransactionList />
        <AddTransaction />
        <ChangeCurrency/>
      </div>
    </GlobalProvider>
  );
}

export default App;
