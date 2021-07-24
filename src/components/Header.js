import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
 return (
     <header>
         <h1>
             <NavLink to="/" axact="true">Portfolio</NavLink>
         </h1>
         <nav>
             <ul>
                 <li><NavLink to="/about">About Me  </NavLink></li>
                 <li><NavLink to="/Product">Product  </NavLink></li>
                 <li><NavLink to="/contact">Contact  </NavLink></li>
             </ul>
         </nav>
     </header>
 )
}

export default Header