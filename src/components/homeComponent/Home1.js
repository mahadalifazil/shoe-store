import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import main_image from './../images/main_image.png';
import dot_img from './../images/dot_img.png';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import useWebAnimations , 

{slideInLeft , bounce} 

from '@wellyshen/use-web-animations';


const useStyles = makeStyles((theme) => ({
    root: {
    },
    paper: {
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        minHeight: 757,
        background: 'linear-gradient(to right bottom,#c70039,#ba003c,#ac033d,#9e073e,#900c3e)',


    },
    grid: {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 30% 100%)',
        minWidth: 630,

    },
    grid1: {
        background: 'white',
        minWidth: 630,


    },
    typography: {
        width: 500,
        fontWeight: 600,
        fontFamily: 'Ariel',
        fontSize: 50,
        color: "black",
        margin: 150,
        lineHeight: 0.5,
        letterSpacing: '-0.01562em',
        //backgroundColor : 'yellow',
        position: "relative",
        textAlign: "center",
    },
    para: {
        position: 'absolute',
        top: 100,
        right: 0,
        left: 100,
        textAlign: "left",
    }

}));

export default function Home1() {

    const {element} = useWebAnimations({...bounce});
    const {ref} = useWebAnimations({...slideInLeft});
    

    console.log ("ref" ,ref);
    console.log ("element" ,element);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs className={classes.grid1} >
                    <Typography className={classes.typography}>
                        <img ref={element} src={dot_img} alt="logo" className={classes.logo} />
                        <p className={classes.para} > <p>ONE SHOE PAIR</p>
                            <p> CAN CHANGE</p>
                            <p  style={{ color: '#C70039' }}>YOUR LIFE</p>
                            <p> <BtnShopNow /> </p>
                        </p>

                    </Typography>
                </Grid>

                <Grid item xs className={classes.grid}>
                    <Paper className={classes.paper} >
                        <img ref = {ref} id="moving" style=
                            {{ width: 530, height: 470, marginTop: 120, marginLeft: 100 }}

                            src={main_image} alt="logo" className={classes.logo} />
                    </Paper>
                </Grid>
               
            </Grid>           
        </div>
    );
}

function BtnShopNow() {
    return (
        <Link to="/shop" style={{ textDecorationLine: 'none' }}>
            <Button disableElevation variant="contained"
                style={{ background: '#C70039', padding: 10, marginLeft: 10, color: 'white' }} >
                SHOP NOW
      </Button>
        </Link>
    );
}

