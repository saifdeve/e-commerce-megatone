import { useState } from 'react';
import './product.css'

import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function Produt(){
    const [rationValue,setRationValue]= useState(3.5);
    function handleRationChange(event, newValue){
        setRationValue(newValue); // Mettre à jour la valeur du rating
      };

    return(
        <div className='content-product'>
            <div className='top-card'>
               <div className='product-badges'>Hot</div>
               <img className='product-img' src='https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg' alt='img-1'/>
            </div>
            <div className='botton-card'>
                <h6 >Hodo Foods</h6>
                <h4>All Natural Italian-Style Chicken Meatballs</h4>
                <div className='ration'>
                    <Rating name="half-rating" value={rationValue} precision={0.5} readOnly onChange={handleRationChange}/>
                    <span className='rationValue'>({rationValue % 2 !== 0 ? rationValue.toFixed(1):rationValue})</span>
                </div>
                <h6>By <span>NestFood</span></h6>
                <Button><FavoriteBorderIcon className='iconWishList'/><span>Add</span></Button>
            </div>
        </div>
    );
}