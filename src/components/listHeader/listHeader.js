// Importation du fichier de style CSS pour ce composant
import './listHeader.css';

// Importation des icônes depuis le dossier des images
import iconCompare from "../../assets/images/icon-compare.svg";
import iconHeart from "../../assets/images/icon-heart.svg";
import iconUser from "../../assets/images/icon-user.svg";

import { Person as PersonIcon, Favorite as FavoriteIcon, Settings as SettingsIcon, Logout as LogoutIcon } from '@mui/icons-material';

// Importe le composant Button depuis la bibliothèque MUI (Material-UI)
import Button from '@mui/material/Button';

import { useState } from 'react';

// Définition du composant listHeader
export default function ListHeader() {
    // État pour suivre si la souris est sur l'élément "Account" ou non
    const [isAccountHovered, setIsAccountHovered] = useState(false);
    
    // Définition des éléments de liste avec leurs icônes, leurs noms et leurs états
    const Lists = [
        { icon: iconCompare, item: "Compare", statue: 1 },
        { icon: iconHeart, item: "Wishlist", statue: 0 },
        { icon: iconUser, item: "Account", statue: null } // L'élément "Account" n'a pas de statue
    ];

    // Rendu du composant
    return (
        <>
            {/* Liste non ordonnée des éléments de menu */}
            <ul className='itemsUlHeader' type='none'>
                {Lists.map((list, index) => (
                    <li
                        className='itemHeader'
                        key={index}
                        onMouseEnter={() => {
                            // Lorsque la souris entre dans l'élément "Account", définir isAccountHovered sur true
                            if (list.item === "Account") setIsAccountHovered(true);
                        }}
                        onMouseLeave={() => {
                            // Lorsque la souris quitte l'élément "Account", définir isAccountHovered sur false
                            if (list.item === "Account") setIsAccountHovered(false);
                        }}
                    >
                        <span>
                            {/* Affichage de l'icône de l'élément */}
                            <img src={list.icon} alt={list.item} />
                            {/* Affichage de la statue si elle est définie */}
                            <span className={`${list.statue !== null ? 'numberStatue' : ''}`}>
                                {list.statue}
                            </span>
                            {/* Affichage du nom de l'élément */}
                            <span style={{ marginLeft: '3px' }}>{list.item}</span>
                            {/* Affichage des boutons pour "My Account" */}
                            {list.item === 'Account' && isAccountHovered && (
                                <ul className='dropDownMenuAccount'>
                                    <li><Button className='dropbtn'><PersonIcon /><span className='dropspan'>My Account</span></Button></li>
                                    <li><Button className='dropbtn'><FavoriteIcon /><span className='dropspan'>My Wishlist</span></Button></li>
                                    <li><Button className='dropbtn'><SettingsIcon /><span className='dropspan'>Setting</span></Button></li>
                                    <li><Button className='dropbtn'><LogoutIcon /><span className='dropspan'>Sign out</span></Button></li>
                                </ul>
                            )}
                        </span>
                    </li>
                ))}
            </ul>
        </>
    );
}
