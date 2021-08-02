import React from 'react';
import { NavLink } from 'react-router-dom';


function Home() {
 return (
<div className="home">
    <div className="home_title">
      <h1>Portfolio</h1>
    </div>
  <br/>
  <div className="menuBar">
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <ul className="home-banner">
    <li><NavLink to="/about">About Me  </NavLink></li>
     <br/>
    <li><NavLink to="/product">Product  </NavLink></li>
     <br/>
    <li><NavLink to="/contact">Contact  </NavLink></li>
    </ul>
  </div>
   <div>

   </div>
</div>
  
 )
}
export default Home