import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <center>
        <h1>
            Welcome to SCAN SET GO
        </h1>
        <h3>
            Stores near by you!
        </h3>
        </center>
      {/* </header> */}
      <form className="form-style" action="" method="get">
      Your Location:  <input type="text" name="location" placeholder=" Enter your city" />
      <button className="submit-button" type="submit" form="form1" value="Submit">Submit</button>

      </form>
      OR
  
      <input type="button" className="location-button" value="Use my loaction"></input>
      
      <footer id="footer">
				<ul class="icons">
					<li>
            <a href="#" class="icon brands fa-twitter" class="label"> Store X</a> </li>
					<li><a href="#" class="icon brands fa-instagram" class="label">Store Y</a></li>
       
					<li><a href="#" class="icon brands fa-github" class="label">Store Z</a></li>
					
				</ul>
			</footer>
            </div>  
         
        )
    }
}

export default Home;