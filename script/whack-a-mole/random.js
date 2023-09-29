
/**
 * Fonction pour générer un trou de taupe aléatoire tout en évitant le trou précédent.
 * @param {string} currentHole - Le trou actuel.
 * @param {string} previousHole - Le trou précédent à éviter (optionnel).
 * @returns {string} - Le nom du trou sélectionné aléatoirement (ex: 'h1', 'h2', ..., 'h12').
 */
function random(currentHole, previousHole) {

    if (currentHole && previousHole && (currentHole === previousHole)) {
        while(currentHole === previousHole) {
            currentHole = 'h' + Math.ceil(Math.random() * 12);
        }
    }
    else {
        currentHole = 'h' + Math.ceil(Math.random() * 12);
    }

    return currentHole;
}