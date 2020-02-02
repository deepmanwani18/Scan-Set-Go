import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Store from './Store';
import Cart from './Cart';

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      cart: []
    }
  }

  updateCart = (addedCart) => {
    this.setState({
      cart: addedCart
    })
  }

  render() {
      return (
        <div className="App">
          <Router>
            {/* <Home /> */}
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/store">
                <Store addToCart={this.updateCart}/>
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
            </Switch>
          </Router>
          </div>
        );
    }
}

export default App;
