let result;
let playerAnswer;
let computerNumber;
let computerSelection;
let playerSelection;

function game() {
    getPlayerSelection();
    getCompSelection();
    playRound();
}

function getPlayerSelection() {
    playerAnswer = prompt('Select either Rock, Paper, or Scissors in order to save humanity!');
    playerSelection = playerAnswer.charAt(0).toUpperCase() + playerAnswer.slice(1).toLowerCase();
    console.log(playerSelection);
    return playerSelection;
    }

function getCompSelection() {
    computerNumber = Math.floor((Math.random() * 100) + 1);
    if (computerNumber < 33) {
        computerSelection = 'Rock';
        console.log(computerSelection);
        return computerSelection;
    } else if (computerNumber > 33 && computerSelection < 67) {
        computerSelection = 'Paper';
        console.log(computerSelection);
        return computerSelection;
    } else {
        computerSelection = 'Scissors';
        console.log(computerSelection);
        return computerSelection;
    }
} 

function playRound(playerSelection,) {
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
    } 
}
