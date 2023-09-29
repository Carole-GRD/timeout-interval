
// Exercise 3 - Whack-A-Mole (bonus)
// ---------------------------------

// Let's create a simple Whack-A-Mole clone.

// The goal of this traditional game is to prevent "moles" from coming out the ground with a hammer. Every second a new "mole" appears and you'll have to click on it to gently tell her to go back into the soil where it belongs. The game doesn't have to picture moles, or animal cruelty you can simply display circle <div>s to begin with. Everytime you click on a mole, your score increases.

// If you'd like to spice things up, you can create an increasing difficulty by reducing the timeframe in which the mole appears.




// --------------------------------------------------------------
//                 Mise en  place du jeu
// --------------------------------------------------------------

// Sélectionnez le corps du document et le premier script
let body = document.querySelector('body');
let script = document.querySelector('script:first-of-type');

// Créez un élément div avec la classe 'wrapper'
let wrapper = document.createElement('div');
wrapper.className = 'wrapper';

// Insérez 'wrapper' juste avant le premier script dans le corps du document
body.insertBefore(wrapper, script);

// Créer la zone de jeu
let playGround = document.createElement('div');
playGround.className = 'playground';
wrapper.appendChild(playGround);


// Créer les trous pour les taupes
let holeNumber = 1;
while (holeNumber <= 12) {
    const hole = document.createElement('div');
    hole.classList.add('hole');
    hole.classList.add('h' + holeNumber);
    playGround.appendChild(hole);
    holeNumber++;
}


// Créer la zone de score
let score = document.createElement('div');
score.className = 'score';
wrapper.appendChild(score);

let scoreText = document.createElement('p');
scoreText.className = 'scoretext';
scoreText.textContent = 'Score : ';
score.appendChild(scoreText);