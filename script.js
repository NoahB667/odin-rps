let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let number = Math.random();
    if (number <= 0.33) {
        return "rock";
    }
    else if (number <= 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let human = prompt("Choose between rock, paper or scissors");
    return human ? human.toLowerCase() : ''; 
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Draw! Both chose ${humanChoice}`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

function playGame() {
    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`Final Scores - You: ${humanScore}, Computer: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("You lose the game!");
    } else {
        console.log("The game is a draw!");
    }
}

playGame();