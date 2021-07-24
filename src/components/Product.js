import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import product1 from '../image/linebot.jpg'
import product2 from '../image/analysis.png'

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
  // getModalStyle is not a pure function, we roll the style only on the first render
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
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  );

// function Product() {
 return (
   <div className="product">
     <h1>Products</h1>
     <div className="card-group">
       <button type="button" onClick={handleOpen}>
     <section className="card">
       <img className="card-img" src={product1} alt=""/>
       <div className="card-content">
         <h1>LINEBOT</h1>
         <br/>
       </div>
     </section></button>
     <Modal
     open={open}
     onClose={handleClose}
     aria-labelledby="simple-modal-title"
     aria-describedby="simple-modal-description"
     >
       {body}
    </Modal>

     <a href="/">
     <section className="card">
       <img className="card-img" src={product2} alt="" width="300px" height="300px" />
       <div className="card-content">
         <h1>Analysis Tool</h1>
         <br/>
       </div>
     </section></a>
     <a href="/">
     <section className="card">
       <img className="card-img" src={product1} alt=""/>
       <div className="card-content">
         <h1>Recipe Page</h1>
         <br/>
       </div>
     </section></a>
     </div>
   </div>
 )
// }
}

// export default Product