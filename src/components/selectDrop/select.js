import { useState , useRef}from 'react';
import './select.css';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Select(){
    const Menus =[{id:1,name:"All Categories"},{id:2,name:"Milks and Dairies"},{id:3,name:"Wines & Drinks"},{id:4,name:"Clothing & beauty"},{id:5,name:"Fresh Seafood"},{id:6,name:"Pet Foods & Toy"},{id:7,name:"Fast food"},{id:8,name:"Bread and Juice"},{id:9,name:"Vegetables"},{id:10,name:"Fresh Seafood"},{id:11,name:"Pet Foods & Toy"},{id:12,name:"Vegetables"},{id:13,name:"Fresh Seafood"},{id:14,name:"Pet Foods & Toy"}];
    const [isOpenSelect, setisOpenSelect]= useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1); // -1: aucun élément sélectionné
    const [selectCategory,setSelectCategory] = useState('All Categories')
    const spanRef = useRef();
    const menuRef = useRef();
    const searchRef = useRef();
    window.addEventListener("click",(e)=>{
        // console.log(e.target !== spanRef.current && e.target !== menuRef.current && e.target !== searchRef.current);
        if(e.target !== spanRef.current && e.target !== menuRef.current && e.target !== searchRef.current){setisOpenSelect(false)}
    })
    const handleClick = (index) => {
        setSelectedIndex(index);
        setSelectCategory(Menus[index - 1].name);
    };
    return(
        <div className='selectDrop'>
            <span ref={spanRef} onClick={()=>setisOpenSelect(!isOpenSelect)} className='openSelect'>{selectCategory} <KeyboardArrowDownIcon className='arrow' /></span>
            {
                isOpenSelect && (
                    <div  className='select-Drop'>
                        <div className='searchDrop'>
                            <input ref={searchRef} type='text' placeholder='Search for categories...'/>
                        </div>
                        <ul  ref={menuRef} className='searchResults'>
                            {
                                Menus.map((menu) => (
                                <li className={`${selectedIndex === menu.id ? 'active':''}`} onClick={() => handleClick(menu.id)}  key={menu.id}>{menu.name}</li>
                                ))
                            }
                        </ul>
                    </div>
                )
            }

        </div>

    );
}