// import React from 'react';
import './Header.css';
import Logo from '../../assets/images/logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/select'

export default function Header(){
    return(
        <header>
            <div className='container-fluid'>
                    <div className='headerLogo'>
                        <img style={{width:'150px'}} src={Logo} alt='Logo'/>
                    </div>
                    <div className='headerSearch'>
                        <div className='selectDrop'>
                            All Categories
                            <Select/>
                        </div>
                        <div className='search'>
                            <input type='text' placeholder='Search for items...'/>
                            <SearchIcon className='searchIcon'/>
                        </div>
                    </div>
            </div>

        </header>
    );
}