const choices = ['rock', 'paper', 'scissors'];

let PlayerScore = 0;
let ComputerScore = 0;
let ComputerInput;
let UserInput;

const buttons = document.querySelectorAll('.play-button');

const gamePlay = document.querySelector('#gamePlay');

const div1 = document.querySelector('.div1');

const div2 = document.querySelector('.div2');

const div3 = document.querySelector('.div3');

const play = document.querySelector('.play');

const rock = document.querySelector('#rock');

const scissors = document.querySelector('#scissors');

const paper = document.querySelector('#paper');

buttons.forEach((button)=> {
    button.addEventListener('click', ()=> {
        div1.textContent='';
        div2.textContent='';
        div3.textContent='';
        UserInput = button.id;
        game();
    });
});

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
            div2.textContent='Tie Game';
        }
        else if(computer=='paper'){
            ComputerScore++;
            div2.textContent='You Lose! Paper beats Rock';
        }
         else if(computer=='scissors'){
            PlayerScore++;
            div2.textContent='You Win! Rock beats Scissors';
        }
    }
    else if(player=='paper'){
        if(computer=='rock'){
            PlayerScore++;
            div2.textContent='You Win! Paper beats Rock';
        }
        else if(computer=='paper'){
            div2.textContent='Tie Game';
        }
        else if(computer=='scissors'){
            ComputerScore++;
            div2.textContent='You Lose! Scissors beat Paper';
        }
    }

    else if (player=='scissors'){
        if(computer=='rock'){
            ComputerScore++;
            div2.textContent='You Lose! Rock beats Scissors';
        }
        else if(computer=='paper'){
            PlayerScore++;
            div2.textContent='You Win! Scissors beats Paper';

        }
        else if(computer=='scissors'){
            div2.textContent='Tie Game';
        }
    }
}

function game(){
        ComputerInput = getComputerChoice();
        playRound(UserInput, ComputerInput);
        div1.textContent='User: '+PlayerScore+ ' Computer: '+ComputerScore;
        gamePlay.appendChild(div1);

    if(PlayerScore==5){
        div3.textContent='Player Wins!';
        restart();
    }

    else if(ComputerScore==5){
        div3.textContent = 'Computer Wins!';
        restart();
    }

}

function restart(){
    const restart = document.createElement('button');
    restart.setAttribute = ('type', 'button');
    restart.textContent = "Restart";
    restart.classList.add('play-button');
    div2.textContent='';
    play.appendChild(restart);
    play.removeChild(rock);
    play.removeChild(paper);
    play.removeChild(scissors);

    restart.addEventListener('click', ()=>{
        PlayerScore=0;
        ComputerScore=0;
        div1.textContent='';
        div3.textContent='';

        play.removeChild(restart);

        play.appendChild(rock);
        play.appendChild(paper);
        play.appendChild(scissors);
    })
}







