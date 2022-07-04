function computerPlay(){
    let play = Math.random()*100+1;
    if (play < 33) return `rock`;
    else if (play>=33 && play <66) return `paper`;
    else return `scissors`;
}

function playRound(){
    let playerSelection = prompt(`Rock/Paper/Scissors`).toLowerCase();
    let computerSelection = computerPlay();
    if (playerSelection == computerSelection){
        return `Draw!!`;
    } else {
        if (playerSelection == `rock`){
                if (computerSelection == `paper`){
                return "You Lose...";
            } else {
                return "You Win!";
            }
        } else if (playerSelection == `paper`){
            if (computerSelection == `scissors`){
                return "You lose...";
            } else if(computerSelection == `rock`){
                return "You Win!";
            }
        } else if (playerSelection == `scissors`){
            if(computerSelection == `rock`){
                return "You lose...";
            }
            else if (computerSelection == `Paper`){
                return "You Win!";
            }
        }
    }
}

