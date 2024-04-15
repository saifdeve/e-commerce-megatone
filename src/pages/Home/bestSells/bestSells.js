import './bestSells.css';
import bannerImage from '../../../assets/images/banner-img.png'
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Slider from "react-slick";

import Product from "../../../components/Product/product"

export default function BestSells(){
    const titleNav =[   
        {id:1,title:"Featured"},
        {id:2,title:"New added"},
        {id:3,title:"Popular"}
    ];
    var settings ={
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade:false,
        arrows:true,
        autoplay: true,
        autoplaySpeed: 3000, // 5 seconds

    }
    const Products =[   
        {id:1,badge:"Hot",img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",titleCategory:"Hodo Foods",titleProduct:"All Natural Italian-Style Chicken Meatballs",ByWho:"NestFood"},
        {id:2,badge:"Sale",img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",titleCategory:"Hodo Foods",titleProduct:"All Natural Italian-Style Chicken Meatballs",ByWho:"NestFood"},
        {id:3,badge:"New",img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",titleCategory:"Hodo Foods",titleProduct:"All Natural Italian-Style Chicken Meatballs",ByWho:"NestFood"},
        {id:4,badge:"",img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",titleCategory:"Hodo Foods",titleProduct:"All Natural Italian-Style Chicken Meatballs",ByWho:"NestFood"},
        {id:5,badge:"Best",img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",titleCategory:"Hodo Foods",titleProduct:"All Natural Italian-Style Chicken Meatballs",ByWho:"NestFood"},
        {id:6,badge:"Sale",img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",titleCategory:"Hodo Foods",titleProduct:"All Natural Italian-Style Chicken Meatballs",ByWho:"NestFood"},
        {id:7,badge:"New",img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",titleCategory:"Hodo Foods",titleProduct:"All Natural Italian-Style Chicken Meatballs",ByWho:"NestFood"},
        {id:8,badge:"Best",img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",titleCategory:"Hodo Foods",titleProduct:"All Natural Italian-Style Chicken Meatballs",ByWho:"NestFood"},
        {id:9,badge:"",img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",titleCategory:"Hodo Foods",titleProduct:"All Natural Italian-Style Chicken Meatballs",ByWho:"NestFood"},
        {id:10,badge:"",img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",titleCategory:"Hodo Foods",titleProduct:"All Natural Italian-Style Chicken Meatballs",ByWho:"NestFood"},
        
    ];
    return(
        <div className='container-sells'>
            <div className='navSells'>
                <h3 className='tetlePro'>Daily Best Sells</h3>
                <ul className='listNavPro'>
                    {
                        titleNav.map((nav)=>(
                            <li key={nav.id} className='titleNavPro'>{nav.title}</li>
                        ))
                    }
                </ul>
            </div>
            <div className='centent-sells'>
                <div className='bannerSells'>
                    <img src={bannerImage} alt='banner-img' />
                    <div className='bannerContent'>
                        <h2 className='textBanner'>Bring nature into your home</h2>
                        <Button className='btnBanner'><span>Shop Now</span><ArrowForwardIcon className='iconBtnBanner'/></Button>
                    </div>
                </div>
                <div className='sliderSells'>
                    <Slider {...settings} className='list-product'>
                    {                    
                        Products.map((product)=>(
                            <Product key={product.id} image={product.img} titleCategory={product.titleCategory} titleProduct={product.titleProduct} ByWho={product.ByWho}/>
                        ))
                    }
                    </Slider>
                </div>
            </div>
        </div>
    );
}