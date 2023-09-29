

// --------------------------------------------------------------
//               Démarrage du jeu et gestion des taupes
// --------------------------------------------------------------

// Variables pour stocker les taupes actuelles
let currentRandomHole;
let previousRandomHole;

/**
 * Fonction pour gérer le démarrage du jeu et la gestion des taupes.
 */
function startGame() {

    // Si une taupe est déjà présente
    if (currentRandomHole && previousRandomHole) {  
        // Faites-la rentrer                   
        returnOfTheMole();  
        // Sélectionnez une autre taupe aléatoire                               
        currentRandomHole = random(currentRandomHole, previousRandomHole);      
    }
    else {
        // Sinon, sélectionnez une première taupe aléatoire
        currentRandomHole = random();                             
    }

    // Faites sortir la taupe
    exitFromTheMole(currentRandomHole);                           

    // Mettez à jour la nouvelle taupe actuelle
    previousRandomHole = currentRandomHole;

}

// START THE GAME ↓
// setInterval(startGame, 1000);

// Démarrer le jeu en appelant startGame à intervalles réguliers (toutes les 1100 ms)
let start = setInterval(startGame, 1100);