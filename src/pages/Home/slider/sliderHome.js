import './sliderHome.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

import Slider1 from '../../../assets/images/slider-1.png'
import Slider2 from '../../../assets/images/slider-2.png'


export default function SliderHome(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade:true,
        autoplay: true,
        autoplaySpeed: 5000 // 5 seconds
    };
    const HomeSlider = [{img:Slider1,firstTitre:"Fresh Vegetables",laterTitre:"Big discount",smallTitre:"Sign up for the daily newsletter"},{img:Slider2,firstTitre:"Fresh Vegetables",laterTitre:"Big discount",smallTitre:"Sign up for the daily newsletter"}]
    return(
        <>
        <section className='homeSlider'>
            <Slider {...settings} className='homeSliderMain'>
                {
                    HomeSlider.map((homeslider,index)=>(
                        <div className='insideSlider' key={index}>
                        <img className='imgSlider' src={homeslider.img} alt='slider-1'/>
                        <div className='textOnSlider'>
                            <h1 >{homeslider.firstTitre}<br/>{homeslider.laterTitre}</h1>
                            <p>{homeslider.smallTitre}</p>
                            <div className='newsletter'>
                                <SendIcon className='iconNewletter'/>
                                <input type='email' placeholder='Your emaill address'/>
                                <Button className='btnNewletter'>Subscribe</Button>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </Slider>
        </section>

        </>
    );
}