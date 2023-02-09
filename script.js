let winCount = 0;
let tieCount = 0;
let loseCount = 0;

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

function checkScore(win, lose) {
    if(win == 5) {
        openPopup();
        popupTitle.textContent = "You beat the computer congratulations!!!";
    }
    else if (lose == 5) {
        openPopup();
        popupTitle.textContent = "Oh no the computer bested you!!";
    }
}

function resultFunc(str, winner, loser) {
    switch (true) {
        case str == 'win':
            result.textContent = "You Win!"
            message.textContent = winner + " beats " + loser;
            winCount++;
            break;
        case str == 'tie':
            result.textContent = "It's a tie!";
            message.textContent = "Nobody Wins"
            tieCount++;
            break;
        case str == 'lose':
            result.textContent = "You Lose!"
            message.textContent = winner + " beats " + loser;
            loseCount++;
            break;
    }
    score.textContent = "Current Score Win: - " + winCount + " Tie- " + tieCount + " Lose- " + loseCount;

    checkScore(winCount,loseCount);
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    computerChoice.textContent = computerSelection;
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            resultFunc('tie');
        }
        else if (computerSelection == "paper") {
            resultFunc('lose', 'paper', 'rock');
        }
        else{
            resultFunc('win', 'rock', 'scissor');
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            resultFunc('win', 'paper', 'rock');
        }
        else if (computerSelection == "paper") {
            resultFunc('tie');
        }
        else{
            resultFunc('lose', 'scissors', 'paper');
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            resultFunc('lose', 'rock', 'scissors');
        }
        else if (computerSelection == "paper") {
            resultFunc('win', 'scissors', 'paper');
        }
        else{
            resultFunc('tie');
        }
    }
}

function openPopup() {
    popup.classList.add('active');
    overlay.classList.add('active');
}

function closePopup() {
    popup.classList.remove('active');
    overlay.classList.add('active');
}

const result = document.querySelector('.result');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const computerChoice = document.querySelector('.computerChoice');
const popup = document.querySelector('.popup');
const popupTitle = document.querySelector('.popupTitle');
const overlay = document.querySelector('.overlay');
const restartButton = document.querySelector('.restartButton');


const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    playRound("rock");
});

const scissors = document.querySelector('.scissors')
scissors.addEventListener('click', () => {
    playRound("scissors");
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    playRound("paper");
});

restartButton.addEventListener('click', () => {
    location.reload();
});







