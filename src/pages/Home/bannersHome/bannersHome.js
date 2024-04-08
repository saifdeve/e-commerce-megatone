import './bannersHome.css';

import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function BannersHome(){
    const ContentBanner =[{id:1,img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-1.png",title:"Everyday Fresh & Clean with Our Products",btn:"Shop Now"},{id:2,img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-2.png",title:"Make your Breakfast Healthy and Easy",btn:"Shop Now"},{id:3,img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-3.png",title:"The best Organic Products Online",btn:"Shop Now"}]
    return(
        <div  className='container-banners'>
            {
                ContentBanner.map((content) => (
                    <div  key={content.id} className='banner'>
                        <img className='imgBanner' src={content.img} alt='img3'/>
                        <div className='content-banner'>
                            <h3 className='titreBanner'>{content.title}</h3>
                            <Button className='btnBanner'><span>{content.btn}</span><ArrowForwardIcon className='iconBtnBanner'/></Button>
                        </div>
                    </div>
                ))
            }

        </div>
    );
}