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


let playerSelection;


function playRoundRock() {
    let computerSelection = getComputerChoice();
    if (computerSelection === "paper") {
        computerScore++
        return "you lose"
    } else if (computerSelection === "scissors"){
        playerScore++
        return "you win"
    } else if (computerSelection === "rock"){
        return "it's a tie"
    }
    
}

function playRoundPaper() {
    let computerSelection = getComputerChoice();
    if (computerSelection === "paper") {
        computerScore++
        return "tie"
    } else if (computerSelection === "scissors"){
        playerScore++
        return "you lose"
    } else if (computerSelection === "rock"){
        return "win"
    }
    
}

function playRoundScissors() {
    let computerSelection = getComputerChoice();
    if (computerSelection === "paper") {
        computerScore++
        return "you win"
    } else if (computerSelection === "scissors"){
        playerScore++
        return "tie"
    } else if (computerSelection === "rock"){
        return "you lose"
    }
    
}

const btn = document.querySelector('.button1');
btn.addEventListener('click', gameRock);

const btn2 = document.querySelector('.button2');
btn2.addEventListener('click', gamePaper);

const btn3 = document.querySelector('.button3');
btn3.addEventListener('click', gameScissors);

function gameRock() {
    console.log(playRoundRock())
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5 || computerScore === 5) {
            if (playerScore > computerScore){
                console.log("Player wins")
                disableButtons()
            } else if (playerScore < computerScore) {
                console.log("Computer Wins")
                disableButtons()
            }
        } 
    }
    console.log(`Player score: ${playerScore} | Computer score: ${computerScore}`)
    }

function gamePaper() {
    console.log(playRoundPaper())
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore){
            console.log("Player wins")
            disableButtons()
        } else if (playerScore < computerScore) {
            console.log("Computer Wins")
            disableButtons()
        }  
    }
     console.log(`Player score: ${playerScore} | Computer score: ${computerScore}`)
    }

function gameScissors() {
    console.log(playRoundScissors())
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5 || computerScore === 5) {
            if (playerScore > computerScore){
                console.log("Player wins")
                disableButtons()
            } else if (playerScore < computerScore) {
                console.log("Computer Wins") 
                disableButtons()
            }
        }
    }
    console.log(`Player score: ${playerScore} | Computer score: ${computerScore}`)
    }

    function disableButtons(){
        btn.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
    }
