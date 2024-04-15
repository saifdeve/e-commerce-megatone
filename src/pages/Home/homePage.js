import React from 'react';
import './homePage.css'
import SliderHome from './slider/sliderHome';
import CatSlider from './catSlider/catSlider';
import BannersHome from './bannersHome/bannersHome';
import ProdHome from './prodHome/prodHome';
import BestSells from './bestSells/bestSells';
import DealsDay from './dealsDay/dealsDay';

export default function Home(){
    return(
        <>
            <SliderHome/>
            <CatSlider/>
            <BannersHome/>
            <ProdHome/>
            <BestSells/>
            <DealsDay/>
        </>
    );
}
