
// -------------------------- The HangMan Game ---------------------------

//! ------- Variables -----
//Tableau de mots random :
const wordsList = ['crunchy', 'crazy', 'bollywood', 'earrings', 'mug', 'sunshine', 'beauty', 'motivation', 'travel', 'courage'];
const randomIndex = Math.floor(Math.random() * wordsList.length); // formule pour sélectionner de manière aléatoire un mot dans la wordsList
const randomWord = wordsList[randomIndex]; // sélection d'un mot random du tableau wordsList en lui applicant la formule stockée dans randomIndex
console.log(randomWord);

const RemainingAttempts = 7;
let wordSplit = randomWord.split('');
let guess = [];  // variable pour stocker les lettres tapées par l'user;
let hiddenWord = [];

const keypadBtns = document.querySelectorAll("button.key");  // Récupérer la valeur des touches de clavier:

const resultDisplay = document.querySelector('.result');
const resetGame = document.querySelector(".start");

//! -------- Conditions ------

// Générer des espaces '_' selon la longueur du mot choisi de manière random :
for (let i = 0; i < wordSplit.length; i++) {
    hiddenWord.push(' _ ');
};
console.log(hiddenWord.join(''));
document.querySelector('.challengeWord').append(hiddenWord.join('')); //! ne fonctionne pas (pour afficher le hiddenWord dans le p dédié)

for (let i=0; i < keypadBtns.length; i++) {
    console.log(keypadBtns[i].textContent)
}
//! ------- Functions -------

// Fonction qui analyse les réponses :

function analyzeGuess (keypadBtns, randomWord) {

   // guess = guess.toLowerCase();

    for(let i = 0; i < randomWord.length; i ++) {
        if((keypadBtns[i].value).includes(randomWord[i])) {
                                                            //! utiliser le .replace ici..
        }
        else {
            RemainingAttempts --;
        }
    }
};

// Fonction qui détermine conditions pour gagner/perdre:

function winLost () {
    if(RemainingAttempts === 0){
        resultDisplay.textContent = "Game Over! Click on 'Start a new Game' to play again";
    }
    else {
        if(keypadBtns === randomWord) {
            resultDisplay.textContent = "Well done! Click on 'Start a new Game' to play again"
        }
    }
     
}

// Fonction qui relance le jeu => réinitialise remainingAttempts, génère un new randomWord:

function startGame() {

}

    



// Fonction qui display le result:


// Foonction qui update l'image du HangMan :

//

//! ----- Events -------



keypadBtns.addEventListener('click', analyzeGuess());
    


resetGame.addEventListener('click', (startGame));
