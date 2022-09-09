
let result;
let playerAnswer;
let computerNumber;
let computerSelection
let playerSelection;

function game() {
    playerAnswer = prompt('Select either Rock, Paper, or Scissors in order to save humanity!');
    playerSelection = playerAnswer.charAt(0).toUpperCase() + playerAnswer.slice(1);
    return playround();
}

function getCompGuess() {
    computerNumber = Math.floor((Math.random() * 100) + 1);
    if (computerNumber < 33) {
        computerSelection = 'Rock'
    } else if (computerNumber > 33 && computerSelection < 67) {
        computerSelection = 'Paper'
    } else if (computerNumber > 67) {
        computerSelection = 'Scissors'
    }
} 

function playround() {

    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock')) {
            result = `You Win! ${playerSelection} beats ${computerSelection}.`;
            return result;
    } else if ((computerSelection == 'Rock' && playerSelection == 'Scissors') ||
        (computerSelection == 'Scissors' && playerSelection == 'Paper') ||
        (computerSelection == 'Paper' && playerSelection == 'Rock')) {
            result = `You Lose! ${computerSelection} beats ${playerSelection}.`;
            return result;
    } else if (computerSelection == playerSelection) {
            result = 'It\'s a tie! Try again losers!';
            return result;
    } else {
            result = 'I do not know what happened here.';
            return result;
    }
}
