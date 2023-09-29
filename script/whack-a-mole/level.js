
// --------------------------------------------------------------
//                Gestion du changement de niveau
// --------------------------------------------------------------


/**
 * Augmente le niveau du jeu en ajustant la vitesse d'apparition des taupes.
 * @param {number} speed - La nouvelle vitesse du jeu en millisecondes (optionnelle).
 */
function upLevel(speed) {

    // Arrête l'intervalle actuel pour le jeu
    clearInterval(start);

    // Si une nouvelle vitesse est spécifiée, démarre le jeu avec cette vitesse
    if (speed) {
        start = setInterval(startGame, speed);
    }
}