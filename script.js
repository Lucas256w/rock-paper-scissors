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

console.log(getComputerChoice())