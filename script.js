// getRandomNumber function return random no between 0(inclusive) and n(exclusive)
const getRandomNumber = (n) => {
    return Math.floor(Math.random()*n);
}

// getComputerChoice function return computer choices randomly
const getComputerChoice = ()=> {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[getRandomNumber(choices.length)];
}