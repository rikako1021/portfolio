import React from 'react'
import image from '../about.jpg'

function About() {
 return (
   <div className="about">
       <h1>About Me</h1>
       <div className="profile">
           <h2>Profile</h2>
           <br/>
           <p>Rikako Omote | 表梨花子</p>
           <br/>
           <p>2000年 京都市生まれ。静岡県浜松市在住。<br />静岡大学情報学部行動情報学科在学中。</p>
           <p>Born in Kyoto in 2000. Living in Shizuoka.<br/>Studying behavioral informatics at Shizuoka University.</p>
       </div>
       <div className="content">
           <div className="skill">
            <h2>Programming Skill</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>PHP</li>
                <li>Golang</li>
            </ul>
            <h2>Tools</h2>
            <ul>
                <li>tool1</li>
                <li>tool2</li>
                <li>tool3</li>
            </ul>
           </div>
           <div className="experience">
               <h2>Experience</h2>
                <p>いいいいいいいいいいいいい</p>
           </div>
       </div>
       <img src={image} alt="Main" />
   </div>
 )
}

export default About