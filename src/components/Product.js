import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import product1 from '../image/linebot.jpg'
import product2 from '../image/analysis.png'
import product3 from '../image/recipe.jpg'
import ScrollReveal from 'scrollreveal'

ScrollReveal().reveal( ".card1", {
  delay: 200,
  duration: 800,
  origin: "bottom",
  distance: "40px",
});
ScrollReveal().reveal( ".card2", {
  delay: 400,
  duration: 800,
  origin: "bottom",
  distance: "40px",
});
ScrollReveal().reveal( ".card3", {
  delay: 600,
  duration: 800,
  origin: "bottom",
  distance: "40px",
});

function rand() {
  return Math.round(Math.random() * 20) -10;
}

function getModalStyles() {
  const top = 50 + rand();
  const left = 50 + rand();

 return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2,4,3),
  },
}));

export default function Product() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyles);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
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
    <div style={modalStyle} className={classes.paper}>
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
    <div style={modalStyle} className={classes.paper}>
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

    <button type="button" onClick={handleOpen}>
     <section className="card2">
       <img className="card-img" src={product2} alt="" width="300px" height="300px" />
       <div className="card-content">
         <h1>Analysis Tool</h1>
         <br/>
       </div>
     </section></button>
     <Modal
     open={open}
     onClose={handleClose}
     aria-labelledby="simple-modal-title2"
     aria-describedby="simple-modal-description2"
     >
       {body2}
    </Modal>

     <button type="button" onClick={handleOpen}>
     <section className="card3">
       <img className="card-img" src={product3} alt=""/>
       <div className="card-content">
         <h1>Recipe Page</h1>
         <br/>
       </div>
     </section></button>
     <Modal
     open={open}
     onClose={handleClose}
     aria-labelledby="simple-modal-title3"
     aria-describedby="simple-modal-description3"
     >
       {body3}
    </Modal>
     </div>
   </div>
   
 )
}
