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
        this.setState((prevState) => ({
            cart: [...prevState.cart, add]
        }));
        console.log(this.state.cart)
    }

    cartViewer = () => {
        console.log(this.state.cart);
        this.props.addToCart(this.state.cart);
    }
    
    render() {
        return (
            <div>
                <center>
                    <h1>Welcome to {this.props.storeName}</h1>
                </center>
                <Demo additem={this.updateState}/>
                <Link to="/cart"><button onClick={this.cartViewer}>View Cart</button></Link>
            </div>
        )
    }
}

export default Store;