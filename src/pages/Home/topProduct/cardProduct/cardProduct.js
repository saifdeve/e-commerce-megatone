import './cardProduct.css';

import { useState } from 'react';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function CardProduct({url,img,titleProduct}){
    const [rationValue,setRationValue]= useState(4.5);
    const handleRationChange = (event, newValue) => {
        setRationValue(newValue); // Mettre à jour la valeur du rating
    };
    return(
        <div className='card-product'>
            <div className='card-img'>
               <a href={url}><img src={img} alt='img-1'/></a>
            </div>
            <div className='card-content'>
                <h6><a href={url}>{titleProduct}</a></h6>
                <div className='rating'>
                    <Rating name="half-rating" value={rationValue} precision={0.5} readOnly onChange={handleRationChange}/>
                    <span className='rating-number'>({rationValue % 2 !== 0 ? rationValue.toFixed(1):rationValue})</span>
                </div>
                <Button><FavoriteBorderIcon className='iconWishList'/><span>Add</span></Button>
            </div>
        </div>
    );
}