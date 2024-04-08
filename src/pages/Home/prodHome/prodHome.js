import './prodHome.css';
import Product from "../../../components/Product/product"

export default function ProdHome(){
    const titleNav =[   {id:1,title:"All"},
                        {id:2,title:"Milks & Dairies"},
                        {id:3,title:"Coffes & Teas"},
                        {id:4,title:"Pet Foods"},
                        {id:5,title:"Meats"},
                        {id:6,title:"Vegetables"},
                        {id:7,title:"Fruits"}
                    ];
    const Products =[   {id:1,badge:"Hot",img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",titleCategory:"Hodo Foods",titleProduct:"All Natural Italian-Style Chicken Meatballs",ByWho:"NestFood"},
                        {id:2,badge:"Hot",img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",titleCategory:"Hodo Foods",titleProduct:"All Natural Italian-Style Chicken Meatballs",ByWho:"NestFood"},
                        {id:3,badge:"Hot",img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",titleCategory:"Hodo Foods",titleProduct:"All Natural Italian-Style Chicken Meatballs",ByWho:"NestFood"},
                        {id:4,badge:"Hot",img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",titleCategory:"Hodo Foods",titleProduct:"All Natural Italian-Style Chicken Meatballs",ByWho:"NestFood"},
                        {id:5,badge:"Hot",img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",titleCategory:"Hodo Foods",titleProduct:"All Natural Italian-Style Chicken Meatballs",ByWho:"NestFood"},
                        {id:6,badge:"Hot",img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",titleCategory:"Hodo Foods",titleProduct:"All Natural Italian-Style Chicken Meatballs",ByWho:"NestFood"},
                        {id:7,badge:"Hot",img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",titleCategory:"Hodo Foods",titleProduct:"All Natural Italian-Style Chicken Meatballs",ByWho:"NestFood"},
                        {id:8,badge:"Hot",img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",titleCategory:"Hodo Foods",titleProduct:"All Natural Italian-Style Chicken Meatballs",ByWho:"NestFood"},
                        {id:9,badge:"Hot",img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",titleCategory:"Hodo Foods",titleProduct:"All Natural Italian-Style Chicken Meatballs",ByWho:"NestFood"},
                        {id:10,badge:"Hot",img:"https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg",titleCategory:"Hodo Foods",titleProduct:"All Natural Italian-Style Chicken Meatballs",ByWho:"NestFood"}
                    ];
    return(
        <div className='container-products'>
            <div className='navProducts'>
                <h3 className='tetlePro'>Popular Products</h3>
                <ul className='listNavPro'>
                    {
                        titleNav.map((nav)=>(
                            <li key={nav.id} className='titleNavPro'>{nav.title}</li>
                        ))
                    }
                </ul>
            </div>
            <div className='list-product'>
                {
                    Products.map((product)=>(
                        <Product key={product.id} badge={product.badge} image={product.img} titleCategory={product.titleCategory} titleProduct={product.titleProduct} ByWho={product.ByWho}/>
                    ))
                }
            </div>

        </div>
    );
}






