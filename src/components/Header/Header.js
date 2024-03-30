// Importation du fichier de style CSS pour ce composant
import './Header.css';

// Importation du logo depuis le dossier des images
import Logo from '../../assets/images/logo.svg';

// Importation de l'icône de recherche depuis Material-UI
import SearchIcon from '@mui/icons-material/Search';

// Importation des composants Select et ListHeader
import Select from '../selectDrop/select';
import ListHeader from '../listHeader/listHeader';

// Définition du composant Header
export default function Header() {
    // Rendu du composant
    return(
        <header>
            <div className='container-fluid'>
                {/* Logo */}
                <div className='headerLogo'>
                    <img style={{width:'150px'}} src={Logo} alt='Logo' />
                </div>

                {/* Barre de recherche et sélecteur de catégories */}
                <div className='headerSearch'>
                    <Select/>
                    <div className='search'>
                        <input type='text' placeholder='Search for items...' />
                        <SearchIcon className='searchIcon' />
                    </div>
                </div>

                {/* Liste d'en-tête */}
                <div className='listHeader'>
                    <ListHeader/>
                </div>
            </div>
        </header>
    );
}
