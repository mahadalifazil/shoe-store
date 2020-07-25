import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import nike_sign from './images/nike_sign.png';
import Badge from './smallComponents/badge';
import { Link } from 'react-router-dom';
import './components.css';


const useStyles = makeStyles((theme) => ({
  root: {
// backgroundColor : 'red'
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    height: 52,
    width: 90,
    margin: '0 auto',
  },
  appBar: {
    height: 80,
    paddingTop: 15,
    minWidth: 300,
    //position: "absolute",
    zIndex : 100,
    //background: 'transparent !important',
    background: 'linear-gradient(to right bottom,#c70039,#ba003c,#ac033d,#9e073e,#900c3e)',
    transition: 'background 0.1s linear',
    overflow: 'hidden',
    position: 'fixed',
    top: 0,
    display: 'block',
  
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar} >
        <Toolbar>
        <Link to="/"> <img src={nike_sign} alt="logo" className={classes.logo} /> </Link>
          <Typography variant="h6" className={classes.title}>
            {/* SHOE STORE */}
          </Typography>

          <Link to="/" className="linkBtn"> <Button color="inherit">HOME</Button> </Link>
          <Link to="/shop" className="linkBtn"> <Button color="inherit">SHOP</Button> </Link>
          <Link to="/cart" className="linkBtn"> <Button color="inherit"><Badge /></Button> </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}



