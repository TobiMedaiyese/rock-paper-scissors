function getComputerChoice() {
   let choice = Math.floor(Math.random() * 3) 
   if (choice === 0) {
    return "rock";
   }else if (choice === 1) {
    return "paper";
   }else return "scissors"
}
let playerScore = 0
let computerScore = 0

const computerSelection = getComputerChoice();
let playerSelection;
function playRound (playerSelection, computerSelection) {
    playerSelection = prompt("rock, paper, or scissors?")
    if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        return "you lose"
    } else if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
        return "player wins!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
        return "You win"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        return "You lose"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        return "You lose"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++
        return "You win"
    } 
}

function game() {
    for (let x = 1; x <= 5; x++) { 
    console.log(playRound(playerSelection, computerSelection))
    }
    console.log(`Player score: ${playerScore} | Computer score: ${computerScore}`)
}

console.log(game())
