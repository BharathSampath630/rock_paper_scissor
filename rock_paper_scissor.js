console.log(JSON.parse(localStorage.getItem('score')));
let randomValue = 0;
let userMove = ''
let computerMove = '';


const result = JSON.parse(localStorage.getItem('score')) || { wins: 0, loss: 0, ties: 0 };
function updateResultDisplay() {
    document.querySelector('.result').innerHTML = `wins: ${result.wins}; ties: ${result.ties}; loss: ${result.loss}`;
}


updateResultDisplay();
function findComputerMove(){
    randomValue = Math.random();
    if(randomValue<=0.33){
        computerMove = 'Rock';
    }
    else if(randomValue<=0.66){
        computerMove = 'Paper';
    }
    else{
        computerMove = 'Scissors';
    }
}
function printResult(){
    if((userMove === 'Rock' && computerMove === 'Scissors')||(userMove === 'Paper' && computerMove === 'Rock')||(userMove==='Scissors' && computerMove==='Paper')){
        document.querySelector('.result1').innerHTML = "You Win";
        result.wins+=1;
        updateResultDisplay();
    }
    else if(userMove === computerMove){
        document.querySelector('.result1').innerHTML = "Tie";
        result.ties+=1;
        console.log(result.wins,result.ties,result.loss)
        updateResultDisplay();
    }
    else{
        document.querySelector('.result1').innerHTML = "You Lose";
        console.log(userMove);
        console.log(computerMove);
        console.log('machine wins');
        result.loss+=1;
        console.log(result.wins,result.ties,result.loss)
        
        updateResultDisplay();
    }
    document.querySelector('.moves').innerHTML = `You <img src = "images/${userMove}-emoji.png" class = "move-icon"> <img src = "images/${computerMove}-emoji.png"class = "move-icon">Computer`
    localStorage.setItem('score',JSON.stringify(result));
}