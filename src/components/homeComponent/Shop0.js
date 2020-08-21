import React from 'react'
import './../../components/components.css';
import useWebAnimations , 

{fadeInRightBig , shakeX ,swing ,backInUp ,flip , rotateInDownRight ,slideInRight ,slideInDown , slideInLeft , rubberBand ,backOutDown ,lightSpeedInRight } 

from '@wellyshen/use-web-animations';


export default function Shop0 () {

    const { ref, playState, getAnimation } = useWebAnimations({...lightSpeedInRight});
    // const { ref1, playState1, getAnimation1 } = useWebAnimations({...slideInRight});

    return(
        <div ref={ref} className = "div_shop0">
            <h2  className = "h2_shop0" >Shop</h2>
            <h3 className = "h3_shop0" >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
        </div>
    );
}