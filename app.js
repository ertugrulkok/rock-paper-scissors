const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.getElementsByName("buttons");
const playerScoreBoard = document.querySelector(".p-count");
const computerScoreBoard = document.querySelector(".c-count");
const movesLeft = document.querySelector(".movesleft");
const chooseMove = document.getElementById("move");
const chooseMoved = document.getElementById("moved");
const reloadBtn = document.querySelector(".reload");
const leftPunch = document.getElementById("left-punch")
const rightPunch = document.getElementById("right-punch")
const punches = document.getElementById("punches")



let userChoice;
let computerChoice;
let result;
let playerScore = 0;
let computerScore = 0;
let round = 0;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    leftPunch.src = e.target.src
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerchoice();
    getResult();
  })
);

function generateComputerchoice() {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber === 1) {
    computerChoice = "rock";
    rightPunch.setAttribute("src" , "rock.png")
    
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
    rightPunch.setAttribute("src" , "scissors.png")
  }
  if (randomNumber === 3) {
    computerChoice = "paper";
    rightPunch.setAttribute("src" , "paper.png")
  }
 
  round++;
  movesLeft.innerText = `Moves Left: ${10 - round}`;
  computerChoiceDisplay.innerHTML = computerChoice;
 

    if (round == 10) {
    gameOver();
  }

}



    

function getResult() {
  if (computerChoice === userChoice) {
    result = "it is a draw!";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "You lose!";
    computerScore++;
    computerScoreBoard.textContent = computerScore;
 


    
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "You Win!";
    playerScore++;
    playerScoreBoard.textContent = playerScore;
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "You Win!";
    playerScore++;
    playerScoreBoard.textContent = playerScore;
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "You lose!";
    computerScore++;
    computerScoreBoard.textContent = computerScore;
    computerScore++;
    computerScoreBoard.textContent = computerScore;
  }

  if (computerChoice === "paper" && userChoice === "rock") {
    result = "You lose!";
    computerScore++;
    computerScoreBoard.textContent = computerScore;
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "You Win!";
    playerScore++;
    playerScoreBoard.textContent = playerScore;
  }
  resultDisplay.innerHTML = result;
}

function gameOver() {
  possibleChoices.forEach((option) => {
    option.style.display = "none";
  });

  chooseMove.style.fontSize = "70px";
  chooseMove.style.marginBottom = "150px" 
  movesLeft.style.display = "none";
  resultDisplay.style.display = "none"
  punches.style.display = "none"
  chooseMoved.style.display = "block"
  chooseMoved.innerHTML = "GAME OVER"
  


  if (playerScore > computerScore) {
    chooseMove.innerText =  " YOU WON THE GAME";
   "";
  } else if (playerScore < computerScore) {
    chooseMove.innerText = " YOU LOST THE GAME";
  } else {
    chooseMove.innerText = "IT IS A TIE";
  }
  reloadBtn.innerText = "Restart";
  reloadBtn.style.display = "flex";
  reloadBtn.addEventListener("click", () => {
    window.location.reload();
  });
}
