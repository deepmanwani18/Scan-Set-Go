import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";

let shops = [{
  header: 'Big Bazaar',
  description: 'Everything, cheaper and degraded'
},
{
  header: 'Pantaloons',
  description: 'The best clothes that won\'t fit you'
},
  {
    header: 'DMart',
    description: 'Just to be clear, Walmart\'s not my son.'
  },
  {
    header: 'Decathlon',
    description: 'All Day I Dream About Sports'
  },
  {
    header: 'Reliance',
    description: 'We would have been at the top if it were for Mukesh'
  },]
class Home extends Component {

    addStore = (header) => {
      this.props.addStore(header)
    }
  
    render() {
      let list = shops.map ( (shop, index) => {
        return (
          <div>
            <Link to="/store">
              <Card centered onClick={() => this.addStore(shop.header)}
                header={shop.header}
                meta={shop.description} />
            </Link>
            <br/>
          </div>
        )
      })
        return (
          <div>
            <center>
              <h1>
                  Welcome to SCAN SET GO
              </h1>
              <h3>
                  Stores near you!
              </h3>
            </center>
      
            {/* </header> */}
            {list}
            {/* <Link to="/store">
              <Card centered onClick={() => this.addStore(shops[0].header)} 
              header={shops[0].header} 
              meta={shops[0].description} />
            </Link>
            <Link to="/store">
              <Card centered onClick={() => this.addStore(shops[1].header)}
                header={shops[1].header}
                meta={shops[1].description} />
            </Link> */}
          </div>  
         
        )
    }
}

export default Home;



{/* <form className="form-style" action="" method="get">
                Your Location:
                <input type="text" name="location" placeholder=" Enter your city" />
                <center>
                  <button className="submit-button" type="submit" form="form1" value="Submit">Submit</button>
                </center>
            </form>
      
            <footer id="footer">
              <ul class="icons">
                <li class="icon brands fa-instagram">
                    <Link to="/store"> Big Bazaar </Link>
                </li>
                <li>
                  <a href="#" class="icon brands fa-instagram" class="label">Store Y</a>
                </li>       
                <li>
                  <a href="#" class="icon brands fa-github" class="label">Store Z</a>
                </li>
              </ul>
            </footer> */}