// import React from 'react';
import './Header.css';
import Logo from '../../assets/images/logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/select';
import ListHeader from '../listHeader/listHeader';

export default function Header(){
    return(
        <header>
            <div className='container-fluid'>
                    <div className='headerLogo'>
                        <img style={{width:'150px'}} src={Logo} alt='Logo'/>
                    </div>
                    <div className='headerSearch'>
                        <Select/>
                        <div className='search'>
                            <input type='text' placeholder='Search for items...'/>
                            <SearchIcon className='searchIcon'/>
                        </div>
                    </div>
                    <div className='listHeader'>
                        <ListHeader/>
                    </div>
            </div>

        </header>
    );
}