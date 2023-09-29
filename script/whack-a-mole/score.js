
// --------------------------------------------------------------
//                      Gestion du score
// --------------------------------------------------------------

// Variable pour stocker le nombre de taupes touchées
let touchNumber = 0;

// Créez un élément span pour afficher le score
let scoreNumber = document.createElement('span');
// Ajoutez l'élément span à la div 'score'
score.appendChild(scoreNumber);


/**
 * Fonction pour incrémenter le score et effectuer des actions en fonction du score.
 */
function countTheScore() {
    // Incrémente le nombre de taupes touchées
    touchNumber++;

    // Efface le contenu de l'élément span
    scoreNumber.textContent = '';

    // Met à jour le score affiché dans l'élément span
    scoreNumber.textContent = touchNumber;

    // Effectue des actions en fonction du score
    if (touchNumber === 4) {
        upLevel(900);
    }
    if (touchNumber === 7) {
        upLevel(700);
    }
    if (touchNumber === 10) {
        upLevel();
        clearInterval(timeWackAMole);

        // Affiche le temps écoulé pour terminer le jeu
        let timeResult = document.createElement('h3');
        timeResult.textContent = `Vous avez terminé en ${displayText}`;
        body.insertBefore(timeResult, wrapper);
    }
}