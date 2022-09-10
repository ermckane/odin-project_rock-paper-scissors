let result;
let playerAnswer;
let computerNumber;
let computerSelection;
let playerSelection;

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
function playRound() {
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

function game() {
    getPlayerSelection();
    getCompSelection();
    playRound();
    return result;
}
