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

    const roundResultEle = document.querySelector(".round-result")
    if(result === 0) {
        roundResultEle.textContent = "Tie" 
    }
    else if(result > 0) {
        roundResultEle.textContent = `You Won! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        roundResultEle.textContent = `You Loose! ${computerSelection} beats ${playerSelection}`;
    }
}


// displayGameResult function display the result of game which consists of many rounds
const displayGameResult = (playerScore, computerScore) => {
    const gameResultEle = document.querySelector(".game-result")
    if(playerScore == computerScore) {
        gameResultEle.textContent = 'Game Tie'
    }
    if(playerScore > computerScore) {
        gameResultEle.textContent = 'Game won!';
    }
    else {
        gameResultEle.textContent = 'Game Lost!';
    }
}

const displayScore = (playerScore, computerScore)=> {
    const computerScoreEle = document.querySelector("#computerScore")
    const playerScoreEle = document.querySelector("#playerScore")
    playerScoreEle.textContent = playerScore;
    computerScoreEle.textContent = computerScore;
}

let playerScore = 0;
let computerScore = 0;
let maxScore = 5

const options = document.querySelectorAll(".option")

const restartButtonEle = document.querySelector("#restartButton")

// Restart game
restartButtonEle.addEventListener("click", ()=> {
    playerScore = 0;
    computerScore = 0;
    displayScore(playerScore, computerScore);
    
    //reset round result
    const roundResultEle = document.querySelector(".round-result")
    roundResultEle.textContent = "";

    // reset game result
    const gameResultEle = document.querySelector(".game-result")
    gameResultEle.textContent = "";
})

// Setting on click handler on each button to play game
options.forEach(option => {
    option.addEventListener("click", (event) => {

        // If any player reached maximum score do nothing
        if(playerScore === maxScore || computerScore === maxScore) {
            return;
        }

        let playerSelection = option.getAttribute("key")
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        
        playerScore += (result > 0)? 1: 0;
        computerScore += (result < 0)? 1: 0;

        displayScore(playerScore, computerScore);
        
        displayRoundResult(playerSelection, computerSelection, result)
        
        if(playerScore === maxScore || computerScore === maxScore) {
            displayGameResult(playerScore, computerScore);
        }
    })
})
