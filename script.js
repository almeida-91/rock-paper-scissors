function computerPlay(){
    let play = Math.random()*3;
    if (play < 1) return `Rock`;
    else if (play < 2) return `Paper`;
    else return `Scissors`;
}

function playRound(){
    let playerSelection = prompt(`Rock/Paper/Scissors`).toLowerCase();
    playerSelection = ((playerSelection.slice(0,1)).toUpperCase()).concat(playerSelection.slice(1));
    let computerSelection = computerPlay();
    if (playerSelection == computerSelection){
        console.log(`Player Selected: ${playerSelection}`);
        console.log(`Computer Selected: ${computerSelection}`);
        return 2;
    } else {
        console.log(`Player Selected: ${playerSelection}`);     
        console.log(`Computer Selected: ${computerSelection}`); 
        //0 = player wins;
        //1 = player loses;
        //2 = draw;
        if (playerSelection == `Rock`){
            if (computerSelection == `Paper`){
                return 1;
            } else {
                return 0;
            }
        } else if (playerSelection == `Paper`){
            if (computerSelection == `Scissors`){
                return 1;
            } else if(computerSelection == `Rock`){
                return 0;
            }
        } else if (playerSelection == `Scissors`){
            if(computerSelection == `Rock`){
                return 1;
            }
            else if (computerSelection == `Paper`){
                return 0;
            }
        }
    }
}

function game(){
    let computerScore = 0;
    let playerScore = 0;
    let result;
    for( let i = 0 ; i < 5 ; i++ ){
        result = playRound();
        if ( result == 0){
            playerScore ++;
            console.log(`Player Score : ${playerScore}`);
            console.log(`Computer Score : ${computerScore}`);
        } else if ( result == 1){
            computerScore ++;
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

