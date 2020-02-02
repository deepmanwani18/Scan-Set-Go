import React, { Component } from 'react';
import BarcodeReader from 'react-barcode-reader'
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
        this.props.addToCart(this.state.cart);
    }
    
    render() {
        return (
            <div>
                <Demo additem={this.updateState}/>
                <Link to="/cart"><button onClick={this.cartViewer}>View Cart</button></Link>
            </div>
        )
    }
}

export default Store;