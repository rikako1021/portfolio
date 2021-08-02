import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import product1 from '../image/linebot.jpg'
import product2 from '../image/analysis.png'
import product3 from '../image/recipe.jpg'
import ScrollReveal from 'scrollreveal'
import image from '../image/contact.jpg'

ScrollReveal().reveal( ".card1", {
  delay: 500,
  duration: 1000,
  origin: "bottom",
  distance: "40px",
});
ScrollReveal().reveal( ".card2", {
  delay: 600,
  duration: 1000,
  origin: "bottom",
  distance: "40px",
});
ScrollReveal().reveal( ".card3", {
  delay: 700,
  duration: 1000,
  origin: "bottom",
  distance: "40px",
});
function getModalStyles() {
  const top = 50 ;
  const left = 50 ;
}
function getModalStyles2() {
  const top = 50 ;
  const left = 50 ;
}
function getModalStyles3() {
  const top = 50 ;
  const left = 50 ;
}
 /*return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }; */

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    display: "none",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2,4,3),
  },
}));
const useStyles2 = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2,4,3),
  },
}));
const useStyles3 = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2,4,3),
  },
}));


export default function Product() {
  const classes = useStyles();
  const classes2 = useStyles2();
  const classes3 = useStyles3();
  const [modalStyle] = React.useState(getModalStyles);
  const [modalStyle2] = React.useState(getModalStyles2);
  const [modalStyle3] = React.useState(getModalStyles3);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleOpen3 = () => {
    setOpen3(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">LINEトーク上で送信された位置情報から周辺の位置情報を紹介するLINEBot</h2>
      <br/>
      <p id="simple-modal-description">
        とにかく手軽に、今すぐ飲食店を探したい！という時になるべく少ない手間で使えるよう開発しました。
        <br />
        <hr/>
        リソース：Go, LINEmessagingAPI, HotpepperAPI, Heroku
        <br />
        <hr/>
        <div className="GithubLink"><a href="https://github.com/rikako1021/Go-LineBot">Program</a></div>
      </p>
    </div>
  );
  const body2 = (
    <div style={modalStyle2} className={classes2.paper}>
      <h2 id="simple-modal-title2">売上データを分析するツール</h2>
      <br/>
      <p id="simple-modal-description2">
        データベースに登録された売上データをグラフ表示し、次期発注数を予測するツールです。
        <br />
        <hr/>
        リソース：PHP, Laravel, Sqlite
        <br />
        <hr/>
        <div className="GithubLink"><a href="https://github.com/rikako1021/bookOrder-analysis">Program</a></div>
      </p>
    </div>
  );
  const body3 = (
    <div style={modalStyle3} className={classes3.paper}>
      <h2 id="simple-modal-title3">書籍一覧を表示し、絞り込み検索ができるWebページ</h2>
      <br/>
      <p id="simple-modal-description3">
        書籍の一覧結果を表示し、在庫の有無や商品カテゴリでの絞り込みが可能になっているWebページです。
        <br />
        <hr/>
        リソース：Vue.js, Nuxt.js, Node.js, Firebase
        <br />
        <hr/>
        <div className="GithubLink"><a href="https://github.com/rikako1021/book-search-app">Program</a></div>
      </p>
    </div>
  ); 

// function Product() {
 return (
   <div className="product">
     <h1>Products</h1>
    <div className="card-group">
    
    <button type="button" onClick={handleOpen}>
     <section className="card1">
       <img className="card-img" src={product1} alt=""/>
       <div className="card-content">
         <h1>LINEBOT</h1>
         <br/>
       </div>
     </section>
    </button>
    <Modal
     open={open}
     onClose={handleClose}
     aria-labelledby="simple-modal-title"
     aria-describedby="simple-modal-description"
     >
       {body}
    </Modal>

    <button type="button" onClick={handleOpen2}>
     <section className="card2">
       <img className="card-img" src={product2} alt="" width="300px" height="300px" />
       <div className="card-content">
         <h1>Analysis Tool</h1>
         <br/>
       </div>
     </section></button>
     <Modal
     open={open2}
     onClose={handleClose}
     aria-labelledby="simple-modal-title2"
     aria-describedby="simple-modal-description2"
     >
       {body2}
    </Modal>

     <button type="button" onClick={handleOpen3}>
     <section className="card3">
       <img className="card-img" src={product3} alt=""/>
       <div className="card-content">
         <h1>Recipe Page</h1>
         <br/>
       </div>
     </section></button>
     <Modal
     open={open3}
     onClose={handleClose}
     aria-labelledby="simple-modal-title3"
     aria-describedby="simple-modal-description3"
     >
       {body3}
    </Modal>
     </div>
     <br/>
     <br/>
     <img src={image} alt="Products" />
   </div>
   
 )
}
