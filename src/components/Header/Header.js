// Importation du fichier de style CSS pour ce composant
import './Header.css';

// Importation du logo depuis le dossier des images
import Logo from '../../assets/images/logo.svg';

// Importation de l'icône de recherche depuis Material-UI
import SearchIcon from '@mui/icons-material/Search';

// Importation des composants Select et ListHeader
import Select from '../selectDrop/select';
import ListHeader from '../listHeader/listHeader';
import { Link } from 'react-router-dom';

// Importation du composant de navigation
import Nav from './nav/nav.js';

// Importation des hooks useEffect et useRef de React
import { useEffect, useRef } from 'react';

// Définition du composant Header
export default function Header() {
    // Utilisation de useRef pour créer une référence à l'élément de l'en-tête
    const headerRef = useRef()

    // Utilisation de useEffect pour effectuer des actions lors du chargement du composant ou lorsque certaines dépendances changent
    useEffect(() => {
        // Initialisation de la position de défilement précédente
        let previousScrollPosition = window.pageYOffset;

        // Ajout d'un écouteur d'événement de défilement à la fenêtre
        window.addEventListener("scroll", () => {
            // Obtention de la position de défilement actuelle
            let currentScrollPosition = window.pageYOffset;

            // Obtention de la position de défilement actuelle pour une utilisation ultérieure
            let position = window.pageYOffset;

            // Vérification si la position de défilement est supérieure à 50 pixels
            if (position > 50) {
                // Ajout de la classe 'fixed' à l'élément d'en-tête si la position de défilement est supérieure à 50 pixels
                headerRef.current.classList.add('fixed');

                // Vérification si le défilement se déplace vers le haut
                if (currentScrollPosition < previousScrollPosition) {
                    // Ajout de la classe 'scroll' à l'élément d'en-tête si le défilement se déplace vers le haut
                    headerRef.current.classList.add('scroll');
                } else {
                    // Suppression de la classe 'scroll' de l'élément d'en-tête si le défilement ne se déplace pas vers le haut
                    headerRef.current.classList.remove('scroll');
                }

                // Mise à jour de la position de défilement précédente avec la position de défilement actuelle
                previousScrollPosition = currentScrollPosition;
            } else {
                // Suppression de la classe 'fixed' de l'élément d'en-tête si la position de défilement est inférieure ou égale à 50 pixels
                headerRef.current.classList.remove('fixed');
            }
        });
    }, []); // Le tableau vide [] signifie que useEffect ne s'exécute qu'une seule fois après le montage initial du composant

    // Rendu du composant
    return (
        <header ref={headerRef}>
            <div className='container-fluid'>
                {/* Logo */}
                <div className='headerLogo'>
                    {/* Utilisation de Link pour créer un lien vers la page d'accueil */}
                    <Link to='/home'><img style={{ width: '150px' }} src={Logo} alt='Logo' /></Link>
                </div>

                {/* Barre de recherche et sélecteur de catégories */}
                <div className='headerSearch'>
                    <Select /> {/* Utilisation du composant Select */}
                    <div className='search'>
                        <input type='text' placeholder='Search for items...' />
                        <SearchIcon className='searchIcon' />
                    </div>
                </div>

                {/* Liste d'en-tête */}
                <div className='listHeader'>
                    <ListHeader /> {/* Utilisation du composant ListHeader */}
                </div>
            </div>

            {/* Utilisation du composant de navigation */}
            <Nav />
        </header>
    );
}
