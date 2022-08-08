const choices = ['rock', 'paper', 'scissors'];

let PlayerScore = 0;
let ComputerScore = 0;
let ComputerInput;
let UserInput;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    let random = getRandomInt(3);
    return choices[random];
}

function playRound(player, computer){
   if(player=='rock'){
        if(computer=='rock'){
            console.log('Tie Game');
        }
        else if(computer=='paper'){
            ComputerScore++;
            console.log("You Lose! Paper beats Rock");
        }
         else if(computer=='scissors'){
            PlayerScore++;
            console.log("You Win! Rock beats Scissors")
        }
    }
    else if(player=='paper'){
        if(computer=='rock'){
            PlayerScore++;
            console.log('You Win! Paper beats Rock');
        }
        else if(computer=='paper'){
            console.log('Tie Game');
        }
        else if(computer=='scissors'){
            ComputerScore++;
            console.log('You Lose! Scissors beat Paper');
        }
    }

    else if (player=='scissors'){
        if(computer=='rock'){
            ComputerScore++;
            console.log('You Lose! Rock beats Scissors');
        }
        else if(computer=='paper'){
            PlayerScore++;
            console.log('You Win! Scissors beats Paper');
        }
        else if(computer=='scissors'){
            console.log('Tie Game');
        }
    }
    else{
        console.log('Invalid input');
    }
}

function game(){
    while(PlayerScore!==5 || ComputerScore!==5){
        ComputerInput = getComputerChoice();
        UserInput = (prompt("Rock, Paper, Scissors?"));
        UserInput = UserInput.toLowerCase();
        playRound(UserInput, ComputerInput);
        console.log('User: '+PlayerScore+ ' Computer: '+ComputerScore);
    }
    if(PlayerScore==5){
        console.log('Player Wins!');
    }
    else if(ComputerScore==5){
        console.log('Computer Wins');
    }
    ComputerScore = 0;
    PlayerScore = 0;
}

game();








