import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Store from './Store';
import Cart from './Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
