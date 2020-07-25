import React from "react";
import './components.css';


function Cart() {
    return (
        <div
            style=
            {{
                marginTop: 150,
                position : 'fixed',
                marginLeft : 0,
                height: 200,
                maxWidth: 1000,
                minWidth : 400,
                backgroundColor: 'rgba(255,245,247',
                textAlign: "center",
                color : '#718096',
                fontSize: '2.25rem',
                paddingTop : 80,
                justifyContent: 'center',
            }}>

            <p> Cart Is Empty </p>
        </div>
    );
}

export default Cart;