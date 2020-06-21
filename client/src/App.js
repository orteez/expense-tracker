import React from 'react';
import './App.css';

import { GlobalProvider } from './context/GlobalState';
import AppNavbar from './components/AppNavbar';
import { Router, withRouter } from "react-router-dom";

import {createBrowserHistory} from 'history'

const history = createBrowserHistory();


const App = () => {
  return (
    <GlobalProvider>
      <Router history={history}>
        <AppNavbar />
      </Router>
    </GlobalProvider>

  );
}

export default withRouter(App);
