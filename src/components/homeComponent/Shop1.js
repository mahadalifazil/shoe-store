import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Shoes from './../../shoes.json';
//import main_image from './../images/main_image.png';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import {Link} from 'react-router-dom';
import './../components.css';

import useWebAnimations , 

{lightSpeedInLeft } 

from '@wellyshen/use-web-animations';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent : 'center',
    textAlign : "center",
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    justifyContent: 'space-around',
    //backgroundColor: 'black',
    margin: '0 auto',
    height: 400,
    maxWidth : 320,
    minWidth: 100,
    // paddingLeft: '0 auto',
    

  },
  gridContainer: {
    //justifyContent : 'space-around'
    //backgroundColor: 'yellow',
    margin: '0 auto',
    marginTop: 100, 
    maxWidth: 1100,
    minWidth: 300,
    minHeight: 1500,
    paddingRight: 15,
    justifyContent : 'center',
  },

  gridDiv: {
    clipPath: 'ellipse(63% 81% at 82% 16%)',
    maxWidth: 320,
    height: 200,
    background: 'linear-gradient(to right bottom,#c70039,#ba003c,#ac033d,#9e073e,#900c3e)',
  },

  cart : {
    position: 'absolute',
    display: 'block',
    transform: 'rotate(-30deg)',
    margin: '-220px auto',
    backgroundColor : 'transparent',
    borderRadius: 200,
    },

    productTag : {
      paddingLeft : 14,
      textAlign : "left",
      //backgroundColor : 'red',
      marginTop : 60,
      lineHeight: 0.5,
      letterSpacing: '-0.01562em',
      position: "relative",
      fontWeight: 700,
    }

}));

export default function Shop1(props) {

  const {ref} = useWebAnimations({...lightSpeedInLeft});

  const classes = useStyles();
   
  

  return (
    <div className={classes.root}>

      <Grid ref = {ref}   container spacing={8} className={classes.gridContainer} >
        {Object.keys(Shoes).map(keyName => {
          return(
            
          <Grid item xs={12} sm={4} key={keyName}>
            <Paper  className={classes.paper}>
              
            <div className={classes.gridDiv}></div> 
              <div ><img className={classes.cart} src={Shoes[keyName].img} height={250} width={250}  alt="shoes" /></div>
             <div className= {classes.productTag}>
               <h3>{Shoes[keyName].name}</h3> 
               <h4>${Shoes[keyName].price}</h4>
               
               <span ><Link className='linkBtn' to={`/shop/${keyName}`}><DetailsBtn /></Link> <IconBtn/>  </span>
               </div>
             
            </Paper>
          </Grid>

          );
        })}
      </Grid>
    </div >
  );
}



function DetailsBtn() {
  

  const useStyles = makeStyles((theme) => ({
    root: {
      marginLeft : -10,
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Button  variant="contained"  style ={{background: '#C70039' , color : 'white'}}>
       DETAILS
        </Button>
      
  
    </div>
  );
}




function IconBtn() {

  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop : -50,
      marginLeft : 220,
    
      '& > *': {
        margin: theme.spacing(0),
      },
    },
  }));


  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* edit */}
      <IconButton style ={{color : '#C70039'}} aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
    </div>
  );
}