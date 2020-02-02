import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
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
      cart: [],
      shop: ''
    }
  }

  updateCart = (addedCart) => {
    this.setState({
      cart: addedCart
    })
    console.log('Checking for scams', this.state.cart)
  }

  addStore = (shop) => {
    console.log(shop)
    this.setState({
      shop: shop
    })
  }

  render() {
      return (
        <div className="App">
          <Router>
            {/* <Home /> */}
            <Switch>
              <Route path="/" exact>
                <Home addStore={this.addStore}/>
              </Route>
              <Route path="/store">
                <Store storeName={this.state.shop} addToCart={this.updateCart}/>
              </Route>
              <Route path="/cart">
                <Cart cart={this.state.cart}/>
              </Route>
            </Switch>
          </Router>
          </div>
        );
    }
}

export default App;
