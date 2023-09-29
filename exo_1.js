
// Exercise 1
// ----------

// Write a function that mimics the behaviour of a typewriter.

// Using setInterval display the word Keller one character at a time (one letter per second). Once the word is written on the screen clear the interval.


// ---------------------------------------------------------------------------

// let title = 'Keller';
// let letter = 0;
// let display = '';

// let intervalDisplay = setInterval(typewriter, 1000, title);


// function typewriter(text) {
//     display += text[letter];
//     document.body.textContent = display;
//     letter++;
//     if (letter === text.length) {
//         console.warn('STOP');
//         clearInterval(intervalDisplay);
//     }
// }


// ---------------------------------------------------------------------------



// Texte à afficher
const title = 'Keller';

// Compteur pour afficher chaque lettre l'une après l'autre
let letter = 0;

// Création de l'élément h1 une seule fois en dehors de la fonction
const titleElement = document.createElement('h1');

/**
 * Fonction typewriter
 * Cette fonction simule l'effet d'une machine à écrire en ajoutant progressivement du texte à un élément HTML.
 * Elle prend en entrée une chaîne de texte et ajoute un caractère à la fois à l'élément HTML cible.
 *
 * @param {string} text - La chaîne de texte à afficher progressivement.
 */
function typewriter(text) {
    // Crée un nœud de texte avec le caractère actuel
    const titleContent = document.createTextNode(text[letter]);

    // Ajoute le nœud de texte à l'élément HTML cible (h1)
    titleElement.appendChild(titleContent);

    // Ajoute l'élément h1 au corps du document une seule fois
    if (letter === 0) {
        document.body.appendChild(titleElement);
    }

    // Incrémente le compteur de caractères pour le prochain caractère à afficher
    letter++;

    // Arrête l'animation lorsque tous les caractères ont été affichés
    if (letter === text.length) {
        console.warn('Arrêt de l\'animation : tous les caractères ont été affichés.');
        clearInterval(intervalDisplay);
    }
}

// Définition de l'intervalle d'affichage qui prend en paramètres : la fonction et l'intervalle en millisecondes
const intervalDisplay = setInterval(typewriter, 1000, title);
