import React, { Component } from 'react';
import './cartcss.css'
class Cart extends Component {
    constructor (props) {
        super(props)
        this.state = {
            cart: []
        }
    }

    componentWillMount () {
        console.log(this.props.cart)
        this.setState({
            cart: this.props.cart
        })
        setTimeout(() => {
            console.log(this.state.cart)
        }, 2000);
        
    }

    render() {
        let index=1;
        const list = this.state.cart.map(item => {
            return (
                <tr keys={index++}>
                    <td className="text-left">{item.product}</td>
                    <td className="text-left">{item.price}</td>
                    <td className="text-left">{item.company}</td>
                </tr>
            )
        })
    
        return (
            <div>
                <div class="table-title">
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
    }
}

export default Cart