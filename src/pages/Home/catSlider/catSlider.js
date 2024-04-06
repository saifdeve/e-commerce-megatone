import './catSlider.css';
import Slider from "react-slick";


export default function CatSlider(){
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        fade:false,
        arrows:true,
        autoplay: true,
        autoplaySpeed: 2000 // 5 seconds
        
    };
    const Categoriesitems= [{id:1,link:"https://wp.alithemes.com/html/nest/demo/shop-grid-right.html",img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png",name:"Cake & Milk",qt:"26 items"},{id:2,link:"https://wp.alithemes.com/html/nest/demo/shop-grid-right.html",img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-2.png",name:"Strawberry",qt:"6 items"},{id:3,link:"https://wp.alithemes.com/html/nest/demo/shop-grid-right.html",img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png",name:"Cake & Milk",qt:"26 items"},{id:4,link:"https://wp.alithemes.com/html/nest/demo/shop-grid-right.html",img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-2.png",name:"Strawberry",qt:"6 items"},{id:5,link:"https://wp.alithemes.com/html/nest/demo/shop-grid-right.html",img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png",name:"Cake & Milk",qt:"26 items"},{id:6,link:"https://wp.alithemes.com/html/nest/demo/shop-grid-right.html",img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-2.png",name:"Strawberry",qt:"6 items"},{id:7,link:"https://wp.alithemes.com/html/nest/demo/shop-grid-right.html",img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png",name:"Cake & Milk",qt:"26 items"},{id:8,link:"https://wp.alithemes.com/html/nest/demo/shop-grid-right.html",img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-2.png",name:"Strawberry",qt:"6 items"},{id:9,link:"https://wp.alithemes.com/html/nest/demo/shop-grid-right.html",img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png",name:"Cake & Milk",qt:"26 items"},{id:10,link:"https://wp.alithemes.com/html/nest/demo/shop-grid-right.html",img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-2.png",name:"Strawberry",qt:"6 items"},{id:11,link:"https://wp.alithemes.com/html/nest/demo/shop-grid-right.html",img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png",name:"Cake & Milk",qt:"26 items"},{id:12,link:"https://wp.alithemes.com/html/nest/demo/shop-grid-right.html",img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-2.png",name:"Strawberry",qt:"6 items"},{id:13,img:"	https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png",name:"Cake & Milk",qt:"26 items"}];
    return(
        <>
            <section className='catSlider'>
                <h3 className='tetleCat'>Featured Categories</h3> 
                <Slider {...settings} className='catSliderMain'>
                    {
                        Categoriesitems.map((item,index)=>(
                            <div key={item.id} className='item'>
                                <a className='itemlink' href={item.link}><img className='imgItem' src={item.img} alt='alt'/>
                                <h6 className='catH6Item'>{item.name}</h6></a>
                                <p className='catSpanItem'>{item.qt}</p>
                            </div>
                            
                        ))
                    }
                </Slider>
            </section>
        </>
    );
}