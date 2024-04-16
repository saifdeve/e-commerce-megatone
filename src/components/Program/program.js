import { useState, useEffect } from 'react'; // Importation des hooks useState et useEffect depuis React
import './program.css'; // Importation du fichier de style CSS pour ce composant

import Rating from '@mui/material/Rating'; // Importation du composant Rating depuis Material-UI
import Button from '@mui/material/Button'; // Importation du composant Button depuis Material-UI
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; // Importation de l'icône FavoriteBorder depuis Material-UI
import AddIcon from '@mui/icons-material/Add'; // Importation de l'icône Add depuis Material-UI

export default function Program({ image, ProgramCategory, titleProgram, ByWho }) {
    // Déclaration de deux états : rationValue pour le rating et countdown pour le compte à rebours
    const [rationValue, setRationValue] = useState(3.5);
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    // Fonction pour mettre à jour la valeur du rating
    const handleRationChange = (event, newValue) => {
        setRationValue(newValue); // Mettre à jour la valeur du rating
    };

    // Fonction pour calculer le compte à rebours
    const calculateCountdown = () => {
        // Définition de la date limite pour le compte à rebours
        const countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();

        // Mise à jour du compte à rebours toutes les 1 seconde
        const interval = setInterval(() => {
            // Récupération de la date et de l'heure actuelles
            const now = new Date().getTime();

            // Calcul du temps restant
            const distance = countDownDate - now;

            // Calcul des jours, heures, minutes et secondes restants
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Mise à jour de l'état du compte à rebours
            setCountdown({ days, hours, minutes, seconds });

            // Si le compte à rebours est terminé, arrêter l'intervalle
            if (distance < 0) {
                clearInterval(interval);
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        // Fonction de nettoyage pour arrêter l'intervalle lorsque le composant est démonté
        return () => clearInterval(interval);
    };

    // Exécution de la fonction de compte à rebours à la création du composant
    useEffect(() => {
        calculateCountdown();
    }, []);

    // Rendu du composant
    return (
        <div className='card-program'>
            <div className='img-program'>
                <img src={image} alt='img-1' /> {/* Affichage de l'image */}
            </div>
            <div className='program-detaill'>
                {/* Affichage du compte à rebours */}
                <div className='temp-program'>
                    <div className='temp'>
                        <span className='temp-number'>{countdown.days}</span>
                        <span className='temp-date'>Days</span>
                    </div>
                    <div className='temp'>
                        <span className='temp-number'>{countdown.hours}</span>
                        <span className='temp-date'>Hours</span>
                    </div>
                    <div className='temp'>
                        <span className='temp-number'>{countdown.minutes}</span>
                        <span className='temp-date'>Mins</span>
                    </div>
                    <div className='temp'>
                        <span className='temp-number'>{countdown.seconds}</span>
                        <span className='temp-date'>Secs</span>
                    </div>
                </div>
                {/* Affichage des détails du programme */}
                <div className='centent-program'>
                    <h6>{ProgramCategory}</h6> {/* Affichage de la catégorie du programme */}
                    <h4>{titleProgram}</h4> {/* Affichage du titre du programme */}
                    {/* Affichage du rating */}
                    <div className='ration'>
                        <Rating name="half-rating" value={rationValue} precision={0.5} readOnly onChange={handleRationChange} />
                        <span className='rationValue'>({rationValue % 2 !== 0 ? rationValue.toFixed(1) : rationValue})</span>
                    </div>
                    <h6>By <span>{ByWho}</span></h6> {/* Affichage de l'auteur du programme */}
                    {/* Affichage des boutons */}
                    <div className='btnProgram'>
                        <Button><AddIcon className='iconWishList' /><span>Join</span></Button>
                        <Button><FavoriteBorderIcon className='iconWishList' /><span>Add</span></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
