let result;
let playerAnswer;
let computerNumber;
let computerSelection;
let playerSelection;
let playerTally = 0;
let computerTally = 0;

function game() {
    console.log(playRound());
    console.log(gameScore());
    return commentary();
}

function playRound() {
    getPlayerSelection();
    getCompSelection();
    decider();
    return result;
}

//Retrieve player input and convert so always capital first letter followed by lowercase
function getPlayerSelection() {
    playerAnswer = prompt('Select either Rock, Paper, or Scissors in order to save humanity!');
    playerSelection = playerAnswer.charAt(0).toUpperCase() + playerAnswer.slice(1).toLowerCase();
    return playerSelection;
 }

//Get random selection by converting random numbers to choice
function getCompSelection() {
    computerNumber = Math.floor((Math.random() * 100) + 1);      //get random number
    if (computerNumber < 33) {                               
        computerSelection = 'Rock';
        return computerSelection;
    } else if (computerNumber > 67) {
        computerSelection = 'Paper';
        return computerSelection;
    } else {
        computerSelection = 'Scissors';
        return computerSelection;
    }
} 

//Compare computerSelection to playerSelection to get results
function decider() {
    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock')) {
            result = `You Win! ${playerSelection} beats ${computerSelection}.`;
            playerTally++;
            return result;
    } else if ((computerSelection == 'Rock' && playerSelection == 'Scissors') ||
        (computerSelection == 'Scissors' && playerSelection == 'Paper') ||
        (computerSelection == 'Paper' && playerSelection == 'Rock')) {
            result = `You Lose! ${computerSelection} beats ${playerSelection}.`;
            computerTally++;
            return result;
    } else if (computerSelection == playerSelection) {
            result = 'It\'s a tie! Try again losers!';
            return result;
    } 
}

//Tells the score of the current game
function gameScore(score) {
    score = `Player: ${playerTally}\nComputer: ${computerTally}`
    return score;
}

//Gives motivation depending on the score
function commentary() {
    if (computerTally == 3) {
        console.log('Congratulations! You let humanity die.')
    } else if (playerTally == 3) {
        console.log('You saved humanity! Thank you for your service.')
    } else if (playerTally > computerTally) {
        console.log('You have almost saved us! Keep going.')
    } else if (playerTally < computerTally) {
        console.log('Do not disappoint us.')
    } else {
        console.log('Do not lose chump.')
    }
}
