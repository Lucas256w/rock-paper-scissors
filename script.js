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



function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    if (playerSelection = "rock") {
        if (computerSelection == "rock") {
            result.textContent = "It's a tie!"
        }
        else if (computerSelection == "paper") {
            result.textContent = "You Lose! Paper beats Rock"
        }
        else{
            result.textContent = "You Win! Rock Beats Scissors"
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            result.textContent = "You Win! Paper beats Rock"
        }
        else if (computerSelection == "paper") {
            result.textContent = "It's a tie!"
        }
        else{
            result.textContent = "You lose! Scissors Beats Paper"
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            result.textContent = "You Lose! Rock Beats Scissors"
        }
        else if (computerSelection == "paper") {
            result.textContent = "You Win! Scissors beats Paper"
        }
        else{
            result.textContent = "It's a tie!"
        }
    }
}

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    console.log(playRound("rock"));
});

const scissors = document.querySelector('.scissors')
scissors.addEventListener('click', () => {
    console.log(playRound("scissors"));
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    console.log(playRound("paper"));
});

const score = document.querySelector('.score');

const result = document.querySelector('.result');


// function game() {
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = prompt("Choose either Rock, Paper, or Scissors.")
//         const computerSelection = getComputerChoice();

//         console.log(playRound(playerSelection,computerSelection));
//     }
// }

