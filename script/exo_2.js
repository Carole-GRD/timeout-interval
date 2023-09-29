
// Exercise 2
// ----------


// Write a function that displays every second that has passed on the page since it was opened. The display should be refreshed every second. If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have passed" (for 120 seconds and more), etc.


// ----------------------------------------------------------------------------
//            En créant un noeud text pour le h3
// ----------------------------------------------------------------------------

// // Crée un élément h3 pour afficher le temps
// const display = document.createElement('h3');

// // // Contenu de l'élément h3
// // let displayContent = ''; 

// // Compteur de secondes
// let second = 1;


// /**
//  * Fonction timeDisplay
//  * Cette fonction affiche le temps écoulé en secondes sous forme de minutes ou de secondes dans un élément HTML h3.
//  * Elle met à jour l'affichage à chaque seconde.
//  */
// function timeDisplay() {

//     if (second === 1) {
//         document.body.appendChild(display);
//     }
//     else {    
//         display.removeChild(display.firstChild);
//     }

//     if ( second % 60 !== 0) {
//         displayContent = document.createTextNode(second);
//     }
//     else if (second === 60) {
//         displayContent = document.createTextNode((second/60) + ' minute s\'est écoulée');
//         console.log((second/60) + ' minute s\'est écoulée');
//     }
//     else {
//         displayContent = document.createTextNode((second/60) + ' minutes se sont écoulées');
//         console.log((second/60) + ' minutes se sont écoulées');
//     }

//     display.appendChild(displayContent);

//     second++;

// }

// setInterval(timeDisplay, 1000);




// ----------------------------------------------------------------------------
//            En donnant un textContent au h3
// ----------------------------------------------------------------------------


// // Crée un élément h3 pour afficher le temps
// const display = document.createElement('h3');

// // Ajoutez l'élément h3 au corps du document une seule fois
// document.body.appendChild(display); 

// // Compteur de secondes
// let second = 1; 

// /**
//  * Fonction timeDisplay
//  * Cette fonction affiche le temps écoulé en secondes sous forme de minutes ou de secondes dans un élément HTML h3.
//  * Elle met à jour l'affichage à chaque seconde.
//  */
// function timeDisplay() {

//     // Configure le contenu en fonction du nombre de secondes écoulées
//     if (second === 60) {

//         // Affiche "1 minute s'est écoulée" lorsque 60 secondes ont passé
//         display.textContent = '1 minute s\'est écoulée';
//         console.log('1 minute s\'est écoulée');

//     } else if (second % 60 === 0) {

//         // Affiche le nombre de minutes écoulées lorsque plus d'une minute a passé
//         const minutes = Math.floor(second / 60);
//         display.textContent = minutes + ' minutes se sont écoulées';
//         console.log(minutes + ' minutes se sont écoulées');

//     } else {

//         // Affiche le nombre de secondes écoulées
//         display.textContent = second + ' secondes';

//     }

//     // Incrémente le compteur de secondes
//     second++; 
// }

// // Appelle la fonction timeDisplay toutes les 1000 millisecondes (1 seconde)
// setInterval(timeDisplay, 1000);



// ----------------------------------------------------------------------------
//             Affichage précis des jours, heures, minutes, secondes
// ----------------------------------------------------------------------------

// Crée un élément h3 pour afficher le temps
const display = document.createElement('h3');
// display.className = 'timeGame';
document.body.appendChild(display); // Ajoutez l'élément h3 au corps du document une seule fois

let seconds = 0; // Compteur de secondes

let displayText = '';

/**
 * Fonction timeDisplay
 * Cette fonction affiche le temps écoulé en jours, heures, minutes et secondes dans un élément HTML h3.
 * Elle met à jour l'affichage à chaque seconde.
 */
function timeDisplay() {
    const days = Math.floor(seconds / 86400); // Calcule le nombre de jours (86400 secondes par jour)
    const hours = Math.floor((seconds % 86400) / 3600); // Calcule le nombre d'heures
    const minutes = Math.floor((seconds % 3600) / 60); // Calcule le nombre de minutes
    const remainingSeconds = seconds % 60; // Calcule le nombre de secondes restantes

    // Construit la chaîne de texte à afficher
    if (days === 0) {
        if (hours === 0) {
            if (minutes === 0 ) {
                // Affiche seulement les secondes si moins d'une minute s'est écoulée
                displayText = remainingSeconds + ' seconde' + ((remainingSeconds === 1 || remainingSeconds === 0) ? '' : 's');
            } else {
                // Affiche les minutes et les secondes
                displayText = minutes + ' minute' + (minutes === 1 ? '' : 's') + ' ' +
                    remainingSeconds + ' seconde' + (remainingSeconds === 1 ? '' : 's');
            }
        } else {
            // Affiche les heures, les minutes et les secondes
            displayText = hours + ' heure' + (hours === 1 ? '' : 's') + ' ' +
                minutes + ' minute' + (minutes === 1 ? '' : 's') + ' ' +
                remainingSeconds + ' seconde' + (remainingSeconds === 1 ? '' : 's');
        }
    } else {
        // Affiche les jours, les heures, les minutes et les secondes
        displayText = days + ' jour' + (days === 1 ? '' : 's') + ' ' +
            hours + ' heure' + (hours === 1 ? '' : 's') + ' ' +
            minutes + ' minute' + (minutes === 1 ? '' : 's') + ' ' +
            remainingSeconds + ' seconde' + (remainingSeconds === 1 ? '' : 's');
    }

    display.textContent = displayText; // Met à jour le contenu de l'élément h3

    seconds++; // Incrémente le compteur de secondes

}

// Appelle la fonction timeDisplay toutes les 1000 millisecondes (1 seconde)
// setInterval(timeDisplay, 1000);

let timeWackAMole = setInterval(timeDisplay, 1000);