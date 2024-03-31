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