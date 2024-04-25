import './trending.css';
import TopProduct from '../topProduct/topProduct';
import CardProduct from '../topProduct/cardProduct/cardProduct';

export default function Trending() {
    // Tableau d'objets contenant les informations sur chaque produit
    const products = [
        { title: "Top Selling", items: [
            { url:"https://wp.alithemes.com/html/nest/demo/shop-product-right.html", img: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-1.jpg", titleProduct: "Nestle Original Coffee-Mate Coffee Creamer" },
            { url:"https://wp.alithemes.com/html/nest/demo/shop-product-right.html", img: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-2.jpg", titleProduct: "Nestle Original Coffee-Mate Coffee Creamer" },
            { url:"https://wp.alithemes.com/html/nest/demo/shop-product-right.html", img: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-3.jpg", titleProduct: "Nestle Original Coffee-Mate Coffee Creamer" }
        ]},
        { title: "Trending Products", items: [
            { url:"https://wp.alithemes.com/html/nest/demo/shop-product-right.html", img: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-4.jpg", titleProduct: "Organic Cage-Free Grade A Large Brown Eggs" },
            { url:"https://wp.alithemes.com/html/nest/demo/shop-product-right.html", img: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-5.jpg", titleProduct: "Seeds of Change Organic Quinoa, Brown, & Red Rice" },
            { url:"https://wp.alithemes.com/html/nest/demo/shop-product-right.html", img: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-6.jpg", titleProduct: "Naturally Flavored Cinnamon Vanilla Light Roast Coffee" }
        ]},
        { title: "Recently added", items: [
            { url:"https://wp.alithemes.com/html/nest/demo/shop-product-right.html", img: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-7.jpg", titleProduct: "Pepperidge Farm Farmhouse Hearty White Bread" },
            { url:"https://wp.alithemes.com/html/nest/demo/shop-product-right.html", img: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-8.jpg", titleProduct: "Organic Frozen Triple Berry Blend" },
            { url:"https://wp.alithemes.com/html/nest/demo/shop-product-right.html", img: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-9.jpg", titleProduct: "Oroweat Country Buttermilk Bread" }
        ]},
        { title: "Top Rated", items: [
            { url:"https://wp.alithemes.com/html/nest/demo/shop-product-right.html", img: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-10.jpg", titleProduct: "Foster Farms Takeout Crispy Classic Buffalo Wings" },
            { url:"https://wp.alithemes.com/html/nest/demo/shop-product-right.html", img: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-11.jpg", titleProduct: "Angie’s Boomchickapop Sweet & Salty Kettle Corn" },
            { url:"https://wp.alithemes.com/html/nest/demo/shop-product-right.html", img: "https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/thumbnail-12.jpg", titleProduct: "All Natural Italian-Style Chicken Meatballs" }
        ]}
    ];

    return (
        <div className='trending'>
            {products.map((category, index) => (
                <TopProduct key={index} title={category.title}>
                    {category.items.map((item, i) => (
                        <CardProduct key={i} url={item.url} img={item.img} titleProduct={item.titleProduct} />
                    ))}
                </TopProduct>
            ))}
        </div>
    );
}
