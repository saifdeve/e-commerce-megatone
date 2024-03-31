// Importation des hooks useState et useRef de React
import { useState , useRef } from 'react';
// Importation du fichier de style CSS pour ce composant
import './select.css';
// Importation de l'icône KeyboardArrowDown depuis Material-UI
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// Définition du composant Select
export default function Select() {

    // Définition des options de menu disponibles
    const Menus =[{id:1,name:"All Categories"},{id:2,name:"Milks and Dairies"},{id:3,name:"Wines & Drinks"},{id:4,name:"Clothing & beauty"},{id:5,name:"Fresh Seafood"},{id:6,name:"Pet Foods & Toy"},{id:7,name:"Fast food"},{id:8,name:"Bread and Juice"},{id:9,name:"Vegetables"},{id:10,name:"Fresh Seafood"},{id:11,name:"Pet Foods & Toy"},{id:12,name:"Vegetables"},{id:13,name:"Fresh Seafood"},{id:14,name:"Pet Foods & Toy"}];

    // État pour gérer l'ouverture/fermeture du menu déroulant
    const [isOpenSelect, setisOpenSelect] = useState(false);

    // État pour suivre l'index de l'élément sélectionné dans le menu
    const [selectedIndex, setSelectedIndex] = useState(-1);

    // État pour stocker la catégorie sélectionnée
    const [selectCategory, setSelectCategory] = useState('All Categories');

    // État pour stocker la valeur de recherche dans l'input de recherche
    const [searchTerm, setSearchTerm] = useState("");

    // Gestionnaire d'événement pour mettre à jour la valeur de recherche
    const handleSearchChange = (event) => { setSearchTerm(event.target.value); };

    // Filtrer les menus en fonction du terme de recherche
    const filteredMenus = Menus.filter((menu) => menu.name.toLowerCase().includes(searchTerm.toLowerCase()) );

    // Références utilisées pour détecter les clics en dehors du composant
    const spanRef = useRef();
    const menuRef = useRef();
    const searchRef = useRef();

    // Gestionnaire d'événement pour fermer le menu déroulant lorsque l'utilisateur clique en dehors du composant
    window.addEventListener("click", (e) => {
        if (e.target !== spanRef.current && e.target !== menuRef.current && e.target !== searchRef.current) {
            setisOpenSelect(false);
        }
    });

    // Gestionnaire d'événement pour sélectionner un élément du menu
    const handleClick = (index) => {
        setSelectedIndex(index);
        setSelectCategory(Menus[index - 1].name);
    };

    // Rendu du composant
    return(
        <div className='selectDrop'>
            {/* Bouton pour ouvrir/fermer le menu déroulant */}
            <span ref={spanRef} onClick={() => setisOpenSelect(!isOpenSelect)} className='openSelect'>
                {/* Vérifie si la longueur de selectCategory est supérieure à 17 caractères . Si c'est le cas, utilise substr(0,17) pour obtenir les 17 premiers caractères de selectCategory et ajoute '...' pour indiquer qu'il y a plus de texte . Sinon, affiche simplement selectCategory sans modifications*/}
                {selectCategory.length>17 ?selectCategory.substr(0,17)+'...': selectCategory} <KeyboardArrowDownIcon className='arrow' /> 
            </span>

            {/* Menu déroulant */}
            {isOpenSelect && (
                <div className='select-Drop'>
                    {/* Barre de recherche */}
                    <div className='searchDrop'>
                        <input
                            ref={searchRef}
                            type='text'
                            placeholder='Search for categories...'
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>

                    {/* Liste des éléments de menu filtrés */}
                    <ul ref={menuRef} className='searchResults'>
                        {filteredMenus.map((menu) => (
                            <li
                                className={`${selectedIndex === menu.id ? 'active':''}`}
                                onClick={() => handleClick(menu.id)}
                                key={menu.id}
                            >
                                {menu.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
