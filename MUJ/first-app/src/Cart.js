import React, { Component } from 'react';
import './cartcss.css'
import { Link } from "react-router-dom";

class Cart extends Component {
    constructor (props) {
        super(props)
        this.state = {
            cart: [],
            shop: ''
        }
    }

    componentDidMount () {
        console.log(this.props.cart)
        this.setState({
            cart: this.props.cart,
            shop: this.props.shop
        })
        setTimeout(() => {
            console.log(this.state.cart)
        }, 2000);
        
    }
    
    render() {
        let index=1;
        const list = this.state.cart.map(item => {
            return (
                <tr key={index++}>
                    <td className="text-left">{item.product}</td>
                    <td className="text-left">{item.price}</td>
                    <td className="text-left">{item.company}</td>
                </tr>
            )
        })
        
        if(!(this.state.cart.length < 1)) 
        return (
            <div>
                <div className="table-title">
                <h1 className= "font" style={{textAlign: "center"}}>YOUR CART</h1>
                </div>
                <table className="table-fill">
                    <thead>
                    <tr>
                        <th className="text-left">ITEM</th>
                        <th className="text-left">PRICE</th>
                        <th className="text-left">SELLER</th>
                    </tr>
                    </thead>
                    <tbody className="table-hover">
                        {list}
                    </tbody>
                </table>                
                <div className="footer">
                <p style = {{textAlign: "center"}} >I am done with Shopping</p>
                </div>
            </div>         
        ) 
        else {
            return(
            <center>
             <h1>Wow! Such Empty. Please start 
             <Link to="/store"> 
                  <span> Shopping</span>
                 </Link>
                 </h1>
             </center>
            )
        }
    }
}

export default Cart