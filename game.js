// return the computer guess from minimum to maximum, inclusive both
function guessNumber(minimum, maximum) {
    return Math.floor((minimum + maximum) /2);
}

window.addEventListener('load', function() {

    let highestLowBoundary = 0;
    let lowestHighBoundary = 100;
    let numberOfGuesses = 0;
    let currentGuess;

    let startGameButton = document.querySelector('.start-game-button');
    let currentGuessElement = document.querySelector('.current-guess');
    let numberOfGuessesElement = document.querySelector('.number-of-guesses');
    let tooLowButton = document.querySelector('.too-low-button');
    let tooHighButton = document.querySelector('.too-high-button');
    let bingoButton = document.querySelector('.bingo-button');
    let title = document.querySelector('h1');
    let newGameButton = document.querySelector('.new-game-button');
    let minimumElement = document.querySelector('.minimum');
    let maximumElement = document.querySelector('.maximum');

    minimumElement.innerHTML = highestLowBoundary;
    maximumElement.innerHTML = lowestHighBoundary;

    function guessAndRedraw() {
        // guess the next number
        currentGuess = guessNumber(highestLowBoundary, lowestHighBoundary);
        // increase the counter
        numberOfGuesses = numberOfGuesses + 1;
        // show the guess and the counter
        currentGuessElement.innerHTML = currentGuess;
        numberOfGuessesElement.innerHTML = numberOfGuesses;
    };

    startGameButton.addEventListener('click', function() {
        //change body class 
        document.body.className = 'during-game';
        
        guessAndRedraw();
    });

    tooLowButton.addEventListener('click', function() {
        //change the low boundary
        if (currentGuess === lowestHighBoundary) {
            alert('Cheater!');
        } else {
        highestLowBoundary = currentGuess + 1;
        console.log(`my next guess will be between ${highestLowBoundary} and ${lowestHighBoundary}`);
        guessAndRedraw();
        }
    });

    tooHighButton.addEventListener('click', function() {
        //change the high boundary 
        if (currentGuess === highestLowBoundary) {
            alert('Cheater!');
        } else {
        lowestHighBoundary = currentGuess -1;
        console.log(`my next guess will be between ${highestLowBoundary} and ${lowestHighBoundary}`);
        guessAndRedraw();
        }
    });

    bingoButton.addEventListener('click', function() {
        document.body.className = 'after-game';
        title.innerHTML = `I'm winner. I won on ${numberOfGuesses} guesses.`
    });

    newGameButton.addEventListener('click', function() {
        document.location.reload();
    })

});