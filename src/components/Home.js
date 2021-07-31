import React from 'react';
import image from '../image/main.jpeg';
import { NavLink } from 'react-router-dom';


function Home() {
 return (
   <div className="home">
       <img src={image} alt="Main" />
       <div className="home_title">
        <h1>This is my Portfolio</h1>
     </div>
     <NavLink to="/about">About Me  </NavLink>
     <NavLink to="/product">Product  </NavLink>
     <NavLink to="/contact">Contact  </NavLink>
   </div>
 )
}

export default Home