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
