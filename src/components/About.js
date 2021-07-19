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
            <br/>
            <ul>
                <li>HTML5 / CSS3</li>
                <li>Javascript (Vue,Nuxt,React,Node)</li>
                <li>PHP(Laravel)</li>
                <li>Golang</li>
            </ul>
            <br/>
            <h2>Tools</h2>
            <ul>
                <li>Docker</li>
                <li>github</li>
                <li>Heroku</li>
                <li>firebase</li>
                <li>MySQL</li>
            </ul>
           </div>
           <div className="experience">
               <h2>Experience</h2>
               <br/>
               <ul>
                <li>2019年3月<br/>京都市立西京高等学校エンタープライジング科を卒業</li>
                <li>2019年4月<br/>静岡大学情報学部行動情報学科に入学</li>
                <li>2023年3月<br/>同大学を卒業予定</li>
                </ul>
           </div>
       </div>
       <img src={image} alt="Main" />
   </div>
 )
}

export default About