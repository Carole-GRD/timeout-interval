
// --------------------------------------------------------------
//                Gestion du retour des taupes
// --------------------------------------------------------------


/**
 * Fait rentrer toutes les taupes dans leurs trous en supprimant la classe "active" et en réinitialisant la couleur de fond.
 */
function returnOfTheMole() {

    // Sélectionnez tous les éléments avec la classe 'hole'
    let holes = document.querySelectorAll('.hole');

    // Parcourez tous les trous
    for (let hole of holes) {
        // Vérifiez si le trou est actif (contient la classe 'active')

        if (hole.classList.contains('active')) {

            // Supprimez la classe 'active' pour faire rentrer la taupe
            hole.classList.remove('active');

            // Réinitialisez la couleur de fond à blanc
            hole.style.backgroundColor = 'white'; 

            // Supprimez l'écouteur d'événements du clic sur la taupe
            hole.removeEventListener('click', countTheScore);
        }
    }
}