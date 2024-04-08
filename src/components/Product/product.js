import { useState } from 'react';
import './product.css'

import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RepeatIcon from '@mui/icons-material/Repeat';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function Produt({badge,image,titleCategory,titleProduct,ByWho}){
    const [rationValue,setRationValue]= useState(3.5);
    function handleRationChange(event, newValue){
        setRationValue(newValue); // Mettre à jour la valeur du rating
      };

    return(
        <div className='content-product'>
            <div className='top-card'>
               <div className='product-badges'>{badge}</div>
               <img className='product-img' src={image} alt='img-1'/>
               <div className='product-action'>
                    <ul className='list-action'>
                        <li className='action' tooltip="Add To Wishlist"><button><FavoriteBorderIcon className='icon'/></button></li>
                        <li className='action' tooltip="Compare"><button><RepeatIcon className='icon'/></button></li>
                        <li className='action' tooltip="Quick View"><button><VisibilityIcon className='icon'/></button></li>
                    </ul>
               </div>
            </div>
            <div className='botton-card'>
                <h6 >{titleCategory}</h6>
                <h4>{titleProduct}</h4>
                <div className='ration'>
                    <Rating name="half-rating" value={rationValue} precision={0.5} readOnly onChange={handleRationChange}/>
                    <span className='rationValue'>({rationValue % 2 !== 0 ? rationValue.toFixed(1):rationValue})</span>
                </div>
                <h6>By <span>{ByWho}</span></h6>
                <Button><FavoriteBorderIcon className='iconWishList'/><span>Add</span></Button>
            </div>
        </div>
    );
}