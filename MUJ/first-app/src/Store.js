import React, { Component } from 'react';
import Demo from './Store/Demo';
import { Link } from 'react-router-dom';

class Store extends Component {
    constructor (props) {
        super(props)
        this.state = {
            result: 'No result',
            cart: []
        }   
    }

    updateState = (add) =>  {
        if(add.company == this.props.storeName) {
        this.setState((prevState) => ({
            cart: [...prevState.cart, add]
        }));
        console.log(this.state.cart)
    }
    else{
        alert("Sorry! This product is not from this Store!")
    }
    }

    cartViewer = () => {
        this.props.addToCart(this.state.cart);
    }
    // componentDidMount () {
    //     let cart = this.state.cart;
    //     var i;
    //   for (i = 1; i < cart.length; i++) {
    //     if(cart[i].shop!=cart[i-1].shop)
    //     { 
    //         alert("Store Names not matched");
    //     }
    //   }
    // }
    render() {
        return (
            <div>
                <center>
                    <h1>Welcome to {this.props.storeName}</h1>
                </center>
                <Demo additem={this.updateState}/>
                <center>
                <Link to="/cart"><button onClick={this.cartViewer}>View Cart</button></Link>
                </center>
            </div>
        )
    }
}

export default Store;