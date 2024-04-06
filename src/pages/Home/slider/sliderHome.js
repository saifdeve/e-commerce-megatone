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
    return(
        <>
        <section className='homeSlider'>
            <Slider {...settings} className='homeSliderMain'>
                <div className='insideSlider'>
                    <img className='imgSlider' src={Slider1} alt='slider-1'/>
                    <div className='textOnSlider'>
                        <h1 >Fresh Vegetables<br/>Big discount</h1>
                        <p>Sign up for the daily newsletter</p>
                        <div className='newsletter'>
                            <SendIcon className='iconNewletter'/>
                            <input type='email' placeholder='Your emaill address'/>
                            <Button className='btnNewletter'>Subscribe</Button>
                        </div>

                    </div>

                </div>
                <div className='insideSlider'>
                    <img className='imgSlider' src={Slider2} alt='slider-1'/>
                    <div className='textOnSlider'>
                        <h1 >Fresh Vegetables<br/>Big discount</h1>
                        <p>Sign up for the daily newsletter</p>
                        <div className='newsletter'>
                            <SendIcon className='iconNewletter'/>
                            <input type='email' placeholder='Your emaill address'/>
                            <Button className='btnNewletter'>Subscribe</Button>
                        </div>

                    </div>
                </div>
            </Slider>
        </section>

        </>
    );
}