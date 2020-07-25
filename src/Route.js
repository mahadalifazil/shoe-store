import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import Shop from './components/Shop';
import PageNotFound from './components/PageNotFound';
import ShopItems from "./components/ShopItems";



function RouteConfig() {
     // edit
   
    return (
       
        <div>
           
            <Router>
            <NavBar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path = "/shop" element = {<Shop/>} />
                    <Route path = "/shop/:id" element = {<ShopItems/>} />
                    <Route path = "/cart" element = {<Cart/>} />
                    <Route path ="*" element = {<PageNotFound/>} />
                </Routes>
            </Router>
           
        </div>
       
    );
}

export default RouteConfig;