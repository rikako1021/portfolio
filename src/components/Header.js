import React from 'react';
import { NavLink } from 'react-router-dom';
import image from '../image/menu5.png'

function Header() { 
 return (
     <header id="head_wrap">
        <h1 className="logo">
            <NavLink to="/" axact="true">Portfolio</NavLink>
        </h1>
        <nav>
        <div id="open" classNmae="btn">
             <a href="#g_menu"><img src={image} alt="menu" width="40%" /></a>
        </div>
        <div id="g_menu">
        <div id="close" className="btn">
            <a href="#">×</a>
        </div>
            <ul>
            <li><NavLink to="/about">About Me  </NavLink></li>
            <li><NavLink to="/Product">Products  </NavLink></li>
            <li><NavLink to="/contact">Contact  </NavLink></li>
            </ul>
        </div>
        </nav>
     </header>    
)
}
export default Header