//Rock Paper Scissors Program

const choices= ["rock", "paper" , "scissors"];
const playerDisplay =document.getElementById("playerDisplay");
const resultDisplay =document.getElementById("resultDisplay");
const computerDisplay =document.getElementById("computerDisplay");
const PlayerScoreDisplay =document.getElementById("PlayerScoreDisplay");
const computerScoreDisplay =document.getElementById("computerScoreDisplay");

let playerScore=0;
let computerScore=0;
function playGame(playerChoice)
{
    const computerchoice = choices[Math.floor(Math.random()*3)];
    console.log(computerchoice);
    let result="";

    if(playerChoice === computerchoice)
    {
        result = "IT'S A TIE!";
    }
    else
    {
        switch(playerChoice)
        {
            case "rock":
                (computerchoice === "scissors") ? result="YOU WIN!" : result="YOU LOSE!" ;
                break;
            
            case "paper":
                (computerchoice === "rock") ? result="YOU WIN!" : result="YOU LOSE!" ;
                break;
            case "scissors":
                (computerchoice === "paper") ? result="YOU WIN!" : result="YOU LOSE!" ;
                break;
                
                
        }
    }
    playerDisplay.textContent =`Player:${playerChoice}`;
    computerDisplay.textContent =`Computer:${computerchoice}`;
    resultDisplay.textContent=result;
    resultDisplay.classList.remove("greenText","redText");
    switch(result)
    {
        case "YOU WIN!":

            resultDisplay.classList.add("greenText");
            playerScore++ ;
            PlayerScoreDisplay.textContent = playerScore;
            break;
        
        case "YOU LOSE!":
        
            resultDisplay.classList.add("redText");
            computerScore++ ;
            computerScoreDisplay.textContent = computerScore ; 
            break;
        
    }
}