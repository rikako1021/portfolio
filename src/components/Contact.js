import React from 'react'
import twitter from '../image/twitter.png'
import facebook from '../image/facebook.png'
import instagram from '../image/instagram.png'
import image from '../image/contact.jpg'

function Contact() {
 return (
   <div className="contact">
    <br/>
   <h1>Contact</h1>
    <div className="links">
   <ul>
     <li><a href="https://twitter.com/C3Vo3"><img src={twitter} alt="Twitter" width="75%" /></a></li>
     <li><a href="https://m.facebook.com/people/%E8%A1%A8%E6%A2%A8%E8%8A%B1%E5%AD%90/100007893701077/"><img src={facebook} alt="Facebook" width="75%" /></a></li>
     <li><a href="https://www.instagram.com/_a20289/?utm_source=ig_embed&ig_mid=793E0636-B81C-4EE5-A849-41383A4A0A5F"><img src={instagram} alt="Instagram" width="75%" /></a></li>
     </ul>
     <br />
     <p>ご連絡、お問い合わせはこちらまで</p>
     <p>Please email, if you have requests or anything.</p>
     <br/>
     <p>omote.rikako.19 [at] shizuoka.ac.jp</p>
     <br />
     <br/>
     <br/>
    </div>
    <img src={image} alt="Contact" />
    </div>
 )
}

export default Contact