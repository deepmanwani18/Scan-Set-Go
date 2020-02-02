import React, { Component } from 'react';
import '/home/deepesh/Desktop/MUJ/first-app/src/cartcss.css'
class Cart extends Component {
    render() {
        return (
            <div>
      
<div class="table-title">
<h1 className= "font" style={{textAlign: "center"}}>YOUR CART</h1>
</div>
<table class="table-fill">
<thead>
<tr>
<th class="text-left">ITEM</th>
<th class="text-left">PRICE</th>
</tr>
</thead>
<tbody class="table-hover">
<tr>
<td class="text-left">ITEM A</td>
<td class="text-left">100</td>
</tr>
<tr>
<td class="text-left">ITEM B</td>
<td class="text-left">10</td>
</tr>
<tr>
<td class="text-left">ITEM C</td>
<td class="text-left">85</td>
</tr>
<tr>
<td class="text-left">ITEM C</td>
<td class="text-left">56</td>
</tr>
<tr>
<td class="text-left">ITEM D</td>
<td class="text-left">98</td>
</tr>
</tbody>
</table>
  
<div class="footer">
  <p style = {{textAlign: "center"}} >I am done with Shopping</p>
</div>

            </div>
            
         
        )
    }
}

export default Cart