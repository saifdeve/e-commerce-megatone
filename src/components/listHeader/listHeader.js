// Importation du fichier de style CSS pour ce composant
import './listHeader.css';

// Importation des icônes depuis le dossier des images
import iconCompare from "../../assets/images/icon-compare.svg";
import iconHeart from "../../assets/images/icon-heart.svg";
import iconUser from "../../assets/images/icon-user.svg";

// Définition du composant listHeader
export default function listHeader() {
    // Définition des éléments de liste avec leurs icônes, leurs noms et leurs états
    const Lists = [{ icon: iconCompare, item: "Compare", statue: 1 },{ icon: iconHeart, item: "Wishlist", statue: 0 },{ icon: iconUser, item: "Account", statue: null } // L'élément "Account" n'a pas de statue
    ];

    // Rendu du composant
    return(
        <>
            {/* Liste non ordonnée des éléments de menu */}
            <ul className='itemsUlHeader' type='none'>
                {Lists.map((list, index) => (
                    <li className='itemHeader' key={index}>
                        <span>
                            {/* Affichage de l'icône de l'élément */}
                            <img src={list.icon} alt={list.item} />
                            {/* Affichage de la statue si elle est définie */}
                            <span className={`${list.statue !== null ? 'numberStatue':'nullStatue'}`}>
                                {list.statue}
                            </span>
                            {/* Affichage du nom de l'élément */}
                            {list.item}
                        </span>
                    </li>
                ))}
            </ul>
        </>
    );
}
