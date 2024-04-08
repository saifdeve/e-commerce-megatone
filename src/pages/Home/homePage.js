import './homePage.css'
import SliderHome from './slider/sliderHome';
import CatSlider from './catSlider/catSlider';
import BannersHome from './bannersHome/bannersHome';
import ProdHome from './prodHome/prodHome';

export default function Home(){
    return(
        <>
            <SliderHome/>
            <CatSlider/>
            <BannersHome/>
            <ProdHome/>
        </>

    );
}