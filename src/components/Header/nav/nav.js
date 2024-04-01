import './nav.css';
// Importe le composant Button depuis la bibliothèque MUI (Material-UI)
import Button from '@mui/material/Button';
import CategoryIcon from '@mui/icons-material/Category';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function nav(){
    return(
        <div className='nav'>
            <div className='container'>
                <div className='nav-button'>
                    <Button className='categoriesBtn'><CategoryIcon/><span>Browse  All Categories</span><KeyboardArrowDownIcon className='arrow'/></Button>
                    <div>
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
                            <div>
                            <Button className='categoriesListBtn'><img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-4.svg' alt='Fresh Seafood'/><span>Fresh Seafood</span></Button>
                            </div>

                        </ul>
                    </div>
                </div>
                <div className='nav-menus'>
                    <ul>
                        <li><span>Home</span></li>
                        <li><span>About</span></li>
                        <li><span>Shop</span></li>
                        <li><span>Blog</span></li>
                        <li><span>Contact</span></li>
                    </ul>
                </div>
                <div className='nav-support'>
                    <img src='' alt=''/>
                </div>
            </div>
        </div>
    );
}