function computerPlay(){
    let play = Math.random()*100+1;
    if (play < 33) return `Rock`;
    else if (play>=33 && play <66) return `Paper`;
    else return `Scissors`;
}

function playRound(){
    let playerSelection = prompt(`Rock/Paper/Scissors`).toLowerCase();
    playerSelection = ((playerSelection.slice(0,1)).toUpperCase()).concat(playerSelection.slice(1));
    let computerSelection = computerPlay();

    if (playerSelection == computerSelection){
        console.log(`Player Selected: ${playerSelection}`);
        console.log(`Computer Selected: ${computerSelection}`);
        return `Draw!!`;
    } else {
        console.log(`Player Selected: ${playerSelection}`);     
        console.log(`Computer Selected: ${computerSelection}`); 
        if (playerSelection == `Rock`){
                if (computerSelection == `Paper`){
                return `You Lose! ${computerSelection} beats ${playerSelection}`;
            } else {
                return `You Win! ${playerSelection} beats ${computerSelection}`;
            }
        } else if (playerSelection == `Paper`){
            if (computerSelection == `Scissors`){
                return `You Lose! ${computerSelection} beats ${playerSelection}`;
            } else if(computerSelection == `Rock`){
                return `You Win! ${playerSelection} beats ${computerSelection}`;
            }
        } else if (playerSelection == `Scissors`){
            if(computerSelection == `Rock`){
                return `You Lose! ${computerSelection} beats ${playerSelection}`;
            }
            else if (computerSelection == `Paper`){
                return `You Win! ${playerSelection} beats ${computerSelection}`;
            }
        }
    }
}

function game(){
    let computerScore = 0;
    let playerScore = 0;
    let result = ""
    for( let i = 0 ; i < 5 ; i++ ){
        result = playRound().slice(0,7);
        if ( result == `You Win`){
            playerScore += 1;
            console.log(`Player Score : ${playerScore}`);
            console.log(`Computer Score : ${computerScore}`);
        } else if ( result == `You Los`){
            computerScore += 1;
            console.log(`Player Score : ${playerScore}`);
            console.log(`Computer Score : ${computerScore}`);
        } else {
            console.log(`Player Score : ${playerScore}`);
            console.log(`Computer Score : ${computerScore}`);
        }
    }
    if ( playerScore > computerScore ){
        return "Player Wins!";
    } else if( playerScore < computerScore){
        return "Computer Wins!";
    } else {
        return "Draw!!"
    }
}

