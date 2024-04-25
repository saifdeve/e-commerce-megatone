import './arrowUp.css';

import { useRef, useEffect, useState } from 'react';

export default function ArrowUp(){
// Référence pour le bouton de défilement vers le haut
const buttonRef = useRef(null);

// État pour gérer la visibilité du bouton
const [isVisible, setIsVisible] = useState(false);

// Fonction pour défiler vers le haut
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Défilement en douceur
    });
};

// Effet pour surveiller le défilement de la page
useEffect(() => {
    // Fonction pour gérer le défilement de la page
    const handleScroll = () => {
        // Détermine si le bouton doit être visible en fonction de la position de défilement
        if (window.pageYOffset > 70) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Ajoute un écouteur d'événements pour le défilement
    window.addEventListener('scroll', handleScroll);

    // Nettoie l'écouteur d'événements lorsque le composant se démonte
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

return (
    // Affiche le bouton uniquement lorsqu'il est visible
    isVisible && (
        <div ref={buttonRef} className='arrowUp'>
            {/* Bouton qui déclenche le défilement vers le haut */}
            <button onClick={scrollToTop}><i className='fa fa-arrow-up'></i></button>
        </div>
    )
);
}