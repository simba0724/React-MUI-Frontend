//2021.12.02-nikola-(Macedonia)-Natalia
import React from 'react';
import './App.css';

import Dashboard from './view/Dashboard';

import Header from './layout/Header';
import Footer from './layout/Footer';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    	<Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
