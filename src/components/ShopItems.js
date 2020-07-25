import React from "react";
import { useParams} from 'react-router-dom';
import Shoes from './../shoes.json';
import PageNotFound from './PageNotFound';
import './components.css';

function ShopItems() {
    const { id } = useParams();
  
  if(!Shoes[id])
  return <h2>{<PageNotFound/>}</h2>

  return (
   
          <div className = "div_items">
            <h4>{Shoes[id].name}</h4>
            <img src={Shoes[id].img} alt="shoes" />
          </div>
   
  )}


export default ShopItems;