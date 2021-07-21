import React from 'react'
import product1 from '../image/linebot.jpg'

function Product() {
 return (
   <div className="product">
     <h1>Products</h1>
     <div className="card-group">
     <a href="/">
     <section class="card">
       <img class="card-img" src={product1} alt=""/>
       <div class="card-content">
         <h1>LINEBOT</h1>
         <br/>
       </div>
     </section></a>
     <a href="/">
     <section class="card">
       <img class="card-img" src={product1} alt=""/>
       <div class="card-content">
         <h1>Analysis Tool</h1>
         <br/>
       </div>
     </section></a>
     <a href="/">
     <section class="card">
       <img class="card-img" src={product1} alt=""/>
       <div class="card-content">
         <h1>Recipe Page</h1>
         <br/>
       </div>
     </section></a>
     </div>
   </div>
 )
}

export default Product