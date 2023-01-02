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

let playerName = prompt('Enter name');

let playerSelection;

let theResults;

function playRoundRock() {
    
    let computerSelection = getComputerChoice();
    if (computerSelection === "paper") {
        computerScore++
        let rockPaper = "you lose";
        createDiv(rockPaper)
    } else if (computerSelection === "scissors"){
        playerScore++
        rockPaper = "you win";
        createDiv(rockPaper)
    } else if (computerSelection === "rock"){
        rockPaper = "it's a tie"
        createDiv(rockPaper)
    }
    
}

function playRoundPaper() {
    
    let computerSelection = getComputerChoice();
    if (computerSelection === "paper") {
        
        let paperPaper = "tie"
        createDiv(paperPaper)
    } else if (computerSelection === "scissors"){
        computerScore++
        paperPaper = "you lose"
        createDiv(paperPaper)
    } else if (computerSelection === "rock"){
        playerScore++
        paperPaper = "win"
        createDiv(paperPaper)
    }
    
}

function playRoundScissors() {
    
    let computerSelection = getComputerChoice();
    if (computerSelection === "paper") {
        playerScore++
        let scissorPaper = "you win"
        createDiv(scissorPaper)
    } else if (computerSelection === "scissors"){
        scissorPaper = "tie"
        createDiv(scissorPaper)
    } else if (computerSelection === "rock"){
        computerScore++
        scissorPaper = "you lose"
        createDiv(scissorPaper)
    }
    
}

const btn = document.querySelector('.button1');
btn.addEventListener('click', gameRock);

const btn2 = document.querySelector('.button2');
btn2.addEventListener('click', gamePaper);

const btn3 = document.querySelector('.button3');
btn3.addEventListener('click', gameScissors);

function gameRock() {
    playRoundRock()
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5 || computerScore === 5) {
            if (playerScore > computerScore){
                theResults = `${playerName} wins`;
                createDiv(theResults)
                disableButtons()
            } else if (playerScore < computerScore) {
                theResults = `Computer wins`;
                createDiv(theResults)
                disableButtons()
            }
        } 
    }
    let theScore = `Player score: ${playerScore} | Computer score: ${computerScore}`
    createDiv(theScore)
    }

function gamePaper() {
    playRoundPaper()
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore){
            theResults = `${playerName} wins`;
            createDiv(theResults)
            disableButtons()
        } else if (playerScore < computerScore) {
            theResults = 'computer wins';
            createDiv(theResults)
            disableButtons()
        }  
    }
    let theScore = `Player score: ${playerScore} | Computer score: ${computerScore}`
    createDiv(theScore)    
}

function gameScissors() {
    playRoundScissors()
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5 || computerScore === 5) {
            if (playerScore > computerScore){
                theResults = `${playerName} wins`;
                createDiv(theResults)
                disableButtons()
            } else if (playerScore < computerScore) {
                theResults = 'computer wins';
                createDiv(theResults)
                disableButtons()
            }
        }
    }
    let theScore = `Player score: ${playerScore} | Computer score: ${computerScore}`
    createDiv(theScore)
    }

    function disableButtons() {
        btn.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
    }
    
    function createDiv(res) {
        const results = document.querySelector('.results');
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = res;
        results.appendChild(content);
    }

    function clearDiv() {
        document.querySelector('results').innerHTML = '';
    }

    