import React from 'react';
import image from '../main.jpeg';

function Home() {
 return (
   <div className="home">
       <img src={image} alt="Main" />
       <div className="home_title">
        <h1>This is my Portfolio</h1>
     </div>
   </div>
 )
}

export default Home