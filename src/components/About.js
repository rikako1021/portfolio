import React from 'react'
import image from '../image/about.jpg'
import ScrollReveal from 'scrollreveal'

ScrollReveal().reveal('.profile', {
    delay: 400,
    duration: 1000,
    origin: "bottom",
    distance: "40px",
});
ScrollReveal().reveal('.skill', {
    delay: 500,
    duration: 1000,
    origin: "bottom",
    distance: "40px",
});
ScrollReveal().reveal('.experience', {
    delay: 500,
    duration: 1000,
    origin: "bottom",
    distance: "40px"
});

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

function About() {
 return (
   <div className="about">
    <h1>About Me</h1>
        <div className="profile">
           <h2>Profile</h2>
           <br/>
           <br/>
           <p>Rikako Omote | 表梨花子</p>
           <br/>
           <br/>
           <p>2000年 京都市生まれ。静岡県浜松市在住。<br />静岡大学情報学部行動情報学科在学中。</p>
           <br/>
           <p>Born in Kyoto in 2000. Living in Shizuoka.<br/>Studying behavioral informatics at Shizuoka University.</p>
       </div>
       <div className="content">
           <div className="card-group2">

           <div className="skill">
            <h2>Programming Skill</h2>
            <br/>
             <ul>
                <li>HTML5 / CSS3</li>
                <li>Javascript ( Vue, Nuxt, React, Node )</li>
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
                <li>Eclipse</li>
                <li>Figma</li>
                <li>Android Studio</li>
             </ul>
            <br/>
            <h2>Qualifications</h2>
             <ul>
                <li>TOEIC 740点</li>
                <li>実用英語技能検定 準一級</li>
                <li>ITパスポート</li>
             </ul>
           </div>
           
           <div className="experience">
               <h2>Experience</h2>
               <ul>
                <li>2016年4月 ー 2019年3月<br/>京都市立西京高等学校　エンタープライジング科</li>
                <li>2019年4月 ー 2023年3月(予定)<br/>静岡大学 情報学部 行動情報学科</li>
                
                </ul>
                <br/>
                <h2>Work history</h2>
                <ul>
                <li>2020年4月 ー<br/>住友林業浜松支店　契約社員</li>
                <li>2021年8月 ー<br/>株式会社オトモ二　長期インターン生</li>
                </ul>
           </div>
           </div>
       </div>
       <br/>
       <br/>
       <br/>
       <br/>
       <img src={image} alt="Main" />
   </div>
 )
}

export default About