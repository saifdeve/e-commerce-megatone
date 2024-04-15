import './nav.css';
import { Link } from 'react-router-dom';
// Importe le composant Button depuis la bibliothèque MUI (Material-UI)
import Button from '@mui/material/Button';
import GridViewIcon from '@mui/icons-material/GridView';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';

export default function Nav(){
    const [isCategoriesBtn, setIsCategoriesBtn] = useState(false);
    return(
        <div className='nav'>
            <div className='container'>
                <div className='nav-button'>
                    <Button className='categoriesBtn' onClick={() => { !isCategoriesBtn ? setIsCategoriesBtn(true) : setIsCategoriesBtn(false)}}><GridViewIcon/><span>Browse  All Categories</span><KeyboardArrowDownIcon className='arrow'/></Button>
                    {   isCategoriesBtn && (
                            <ul className='categoriesList'>
                                <li><Button className='categoriesListBtn'><img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg' alt='Milks and Dairies'/><span>Milks and Dairies</span></Button></li>
                                <li><Button className='categoriesListBtn'><img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-6.svg' alt='Wines & Drinks'/><span>Wines & Drinks</span></Button></li>
                                <li><Button className='categoriesListBtn'><img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-2.svg' alt='Fresh Seafood'/><span>Clothing & beauty</span></Button></li>
                                <li><Button className='categoriesListBtn'><img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-7.svg' alt='Fresh Seafood'/><span>Fresh Seafood</span></Button></li>
                                <li><Button className='categoriesListBtn'><img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-3.svg' alt='Pet Foods & Toy'/><span>Pet Foods & Toy</span></Button></li>
                                <li><Button className='categoriesListBtn'><img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-8.svg' alt='Fast food'/><span>Fast food</span></Button></li>
                                <li><Button className='categoriesListBtn'><img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-4.svg' alt='Baking material'/><span>Baking material</span></Button></li>
                                <li><Button className='categoriesListBtn'><img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-9.svg' alt='Vegetables'/><span>Vegetables</span></Button></li>
                                <li><Button className='categoriesListBtn'><img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-5.svg' alt='Fresh Fruit'/><span>Fresh Fruit</span></Button></li>
                                <li><Button className='categoriesListBtn'><img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-10.svg' alt='Bread and Juice'/><span>Bread and Juice</span></Button></li>
                                <li><Button className='categoriesListBtn'><img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg' alt='Milks and Dairies'/><span>Milks and Dairies</span></Button></li>
                                <li><Button className='categoriesListBtn'><img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-3.svg' alt='Wines & Drinks'/><span>Wines & Drinks</span></Button></li>
                                <li><Button className='categoriesListBtn'><img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-2.svg' alt='Clothing & beauty'/><span>Clothing & beauty</span></Button></li>
                                <li><Button className='categoriesListBtn'><img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-4.svg' alt='Fresh Seafood'/><span>Fresh Seafood</span></Button></li>
                            </ul>
                        )
                    }
                        {/* <div>
                            <Button className='showMoreCategories'><img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-4.svg' alt='Show more...'/><span>Show more...</span></Button>
                        </div> */}
                </div>
                <div className='nav-menus'>
                    <ul>
                        <li><Link to="/home"><span>Home</span></Link></li>
                        <li><Link to="/about"><span>About</span></Link></li>
                        <li><Link to="/shop"><span>Shop</span></Link></li>
                        <li><Link to="/blog"><span>Blog</span></Link></li>
                        <li><Link to="/contact"><span>Contact</span></Link></li>
                    </ul>
                </div>
                <div className='nav-support'>
                    <img style={{marginTop:'5px',width:'30px',height:'35px'}} src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-headphone.svg' alt=''/>
                    <span>24/7 Support Center</span>
                </div>
            </div>
        </div>
    );
}