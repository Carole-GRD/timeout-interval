

// --------------------------------------------------------------
//                 Gestion de la sortie de la taupe
// --------------------------------------------------------------


/**
 * Fait sortir une taupe d'un trou spécifique en marquant le trou comme "active" pour la faire rentrer plus tard.
 * @param {string} randomHole - Le nom de la classe du trou où faire sortir la taupe.
 */
function exitFromTheMole(randomHole) {

    // Sélectionne le trou avec la classe spécifiée (ex: '.h1', '.h2', etc.)
    let holeToFind = document.querySelector(`.${randomHole}`);

    // Marque le trou comme "active" pour faire rentrer la taupe après le temps défini
    holeToFind.classList.add('active');

    // Définit la couleur de fond du trou pour représenter la taupe
    holeToFind.style.backgroundColor = '#E2B659'; 

    // Ajoute un écouteur d'événements pour gérer le clic sur la taupe
    holeToFind.addEventListener('click', countTheScore);
}