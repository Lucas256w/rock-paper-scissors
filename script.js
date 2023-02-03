function getComputerChoice() {
    let num = Math.floor(Math.random() * 3)
    switch (true) {
        case num == 0:
            return "rock";
            break;
        case num == 1:
            return "paper";
            break;
        case num == 2:
            return "scissor";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() == "ROCK") {
        if (computerSelection == "rock") {
            return "It's a tie!"
        }
        else if (computerSelection == "paper") {
            return "You Lose! Paper beats Rock"
        }
        else{
            return "You Win! Rock Beats Scissors"
        }
    }
    else if (playerSelection.toUpperCase() == "PAPER") {
        if (computerSelection == "rock") {
            return "You Win! Paper beats Rock"
        }
        else if (computerSelection == "paper") {
            return "It's a tie!"
        }
        else{
            return "You lose! Scissors Beats Paper"
        }
    }
    else if (playerSelection.toUpperCase() == "SCISSORS") {
        if (computerSelection == "rock") {
            return "You Lose! Rock Beats Scissors"
        }
        else if (computerSelection == "paper") {
            return "You Win! Scissors beats Paper"
        }
        else{
            return "It's a tie!"
        }
    }
    else {
        return "That's not a valid entry!"
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice()

console.log(playRound(playerSelection,computerSelection));