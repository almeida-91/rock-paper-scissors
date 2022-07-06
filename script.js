function computerPlay(){
    let play = Math.random()*3;
    if (play < 1) return `Rock`;
    else if (play < 2) return `Paper`;
    else return `Scissors`;
}

let totalPlayerWins = 0;
let totalCPUWins = 0;
function playRound(playerSelection){
    //playerSelection = prompt(`Rock/Paper/Scissors?`).toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    playerSelection = ((playerSelection.slice(0,1)).toUpperCase()).concat(playerSelection.slice(1));
    let computerSelection = computerPlay();
    selectionC.textContent = `Computer Selected: ${computerSelection}`;
    selectionP.textContent = `Player Selected: ${playerSelection}`;
    console.log(totalPlayerWins);
    console.log(totalCPUWins);
    if (winner.textContent != ''){
        winner.textContent = '';
    }
    if (totalCPUWins == 5 || totalPlayerWins == 5){
        totalCPUWins = 0;
        totalPlayerWins = 0;
    }
    if (playerSelection == computerSelection){
        winner.textContent = `It's a draw!!`;
/*         console.log(`Player Selected: ${playerSelection}`);
        console.log(`Computer Selected: ${computerSelection}`); */
        return 2;
    } else {
/*         console.log(`Player Selected: ${playerSelection}`);     
        console.log(`Computer Selected: ${computerSelection}`);  */
        //0 = player wins;
        //1 = player loses;
        //2 = draw;
        if (playerSelection == `Rock`){
            if (computerSelection == `Paper`){
                totalCPUWins++;
                winner.textContent = `CPU won this round with ${computerSelection} vs ${playerSelection}!`;
                return 1;
            } else {
                totalPlayerWins++;
                winner.textContent = `Player Won this round with ${playerSelection} vs ${computerSelection}!`;
                return 0;
            }
        } else if (playerSelection == `Paper`){
            if (computerSelection == `Scissors`){
                totalCPUWins++;
                winner.textContent = `CPU won this round with ${computerSelection} vs ${playerSelection}!`;
                return 1;
            } else if(computerSelection == `Rock`){
                totalPlayerWins++;
                winner.textContent = `Player Won this round with ${playerSelection} vs ${computerSelection}!`;
                return 0;
            }
        } else if (playerSelection == `Scissors`){
            if(computerSelection == `Rock`){
                totalCPUWins++;
                winner.textContent = `CPU won this round with ${computerSelection} vs ${playerSelection}!`;
                return 1;
            }
            else if (computerSelection == `Paper`){
                totalPlayerWins++;
                winner.textContent = `Player Won this round with ${playerSelection} vs ${computerSelection}!`;
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



const buttonR = document.getElementById(`rock`);
const buttonP = document.getElementById(`paper`);
const buttonS = document.getElementById(`scissors`);

buttonR.addEventListener(`click`, () =>{
    playRound(buttonR.id);
    playerRecord.textContent = "Player Score: " +totalPlayerWins;
    cpuRecord.textContent = "Computer Score: " +totalCPUWins;
    if(totalPlayerWins == 5){
        winner.textContent += `Player Wins!`;
        result.appendChild(winner);
        console.log(winner.textContent);
    } else if(totalCPUWins == 5){
        winner.textContent += `CPU Wins!`;
        result.appendChild(winner);
        console.log(winner.textContent);
    }
});

buttonP.addEventListener(`click`, () =>{
    playRound(buttonP.id);
    playerRecord.textContent = "Player Score: " +totalPlayerWins;
    cpuRecord.textContent = "Computer Score: " +totalCPUWins;
    if(totalPlayerWins == 5){
        winner.textContent += `Player Wins!`;
        result.appendChild(winner);
        console.log(winner.textContent);
    } else if(totalCPUWins == 5){
        winner.textContent += `CPU Wins!`;
        result.appendChild(winner);
        console.log(winner.textContent);
    }
});

 buttonS.addEventListener(`click`, () =>{
    playRound(buttonS.id);
    playerRecord.textContent = "Player Score: " +totalPlayerWins;
    cpuRecord.textContent = "Computer Score: " +totalCPUWins;
    if(totalPlayerWins == 5){
        winner.textContent = `Player Wins!`;
        result.appendChild(winner);
        console.log(winner.textContent);
        totalCPUWins = 0;
        totalPlayerWins = 0;
    } else if(totalCPUWins == 5){
        winner.textContent = `CPU Wins!`;
        console.log(winner.textContent);
        totalCPUWins = 0;
        totalPlayerWins = 0;
    }
});


const result = document.querySelector(`#result`);
result.textContent = `Result :`;

const playerRecord = document.createElement(`div`);
playerRecord.classList.add('playerRecord');
playerRecord.textContent = "Player Score: " +totalPlayerWins;
result.appendChild(playerRecord);

const cpuRecord = document.createElement(`div`);
cpuRecord.classList.add(`cpuRecord`);
cpuRecord.textContent = "Computer Score: " +totalCPUWins;
result.appendChild(cpuRecord);

//buttons.addEventListener(`click`, () => playRound(buttons.item.textContent));

//result.child
//buttonR.addEventListener(`click`,playRound());

//Create record log
const winner = document.createElement(`p`);
winner.classList.add(`winner`);
winner.textContent = `Choose Your Weapon!!`;
result.appendChild(winner);


const selectionP = document.createElement(`p`);
selectionP.classList.add(`selectionP`);
result.appendChild(selectionP);
selectionP.textContent = `Player Selected: `;

const selectionC = document.createElement(`p`);
selectionC.classList.add(`selectionC`);
result.appendChild(selectionC);
selectionC.textContent = `Computer Selected: `;

