// getRandomNumber function return random no between 0(inclusive) and n(exclusive)
const getRandomNumber = (n) => {
    return Math.floor(Math.random()*n);
}

// getComputerChoice function return computer choice randomly
const getComputerChoice = ()=> {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[getRandomNumber(choices.length)];
}

/* playRound function return following value
    -1 -> for computer win
    0  -> for tie
    1  -> for player win */
const playRound = (playerSelection, computerSelection) => {
    // converting each parameters to lowercase
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection === computerSelection) {
        return 0;
    }
    if((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") ) {
        return 1;
    }
    return -1;
}

// displayRoundResult function display the result of one round
const displayRoundResult = (playerSelection, computerSelection, result) => {
    if(result === 0) {
        console.log("Tie")
    }
    else if(result > 0) {
        console.log(`You Won! ${playerSelection} beats ${computerSelection}`);
    }
    else {
        console.log(`You Loose! ${computerSelection} beats ${playerSelection}`);
    }
}


// displayGameResult function display the result of game which consists of many rounds
const displayGameResult = (playerScore, computerScore, totalRounds) => {
    if(playerScore == computerScore) {
        console.log('Game Tie')
    }
    if(playerScore > computerScore) {
        console.log(`You won the game, your won ${playerScore} rounds computer won ${computerScore} out of total ${totalRounds} rounds.`);
    }
    else {
        console.log(`You loose the game, your won ${playerScore} rounds computer won ${computerScore} out of total ${totalRounds} rounds.`);
    }
}

const game = ()=> {
    // playerScore stores number of rounds player won.
    let playerScore = 0;
    // computerScore store number of rounds computer won.
    let computerScore = 0;
    let totalRounds = 5;
    for(let round = 1; round <= totalRounds; round++) {
        let playerSelection = prompt("Enter your choice");
        let computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);
        displayRoundResult(playerSelection, computerSelection, result);
        playerScore += ((result > 0)? 1: 0);
        computerScore += ((result < 0)? 1: 0);
    }
    displayGameResult(playerScore, computerScore, totalRounds)
}

game()
