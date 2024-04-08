import './prodHome.css';
import Product from "../../../components/Product/product"

export default function ProdHome(){
    const titleNav =[{id:1,title:"All"},{id:2,title:"Milks & Dairies"},{id:3,title:"Coffes & Teas"},{id:4,title:"Pet Foods"},{id:5,title:"Meats"},{id:6,title:"Vegetables"},{id:7,title:"Fruits"}]
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
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>

        </div>
    );
}






