let result=' ';
const score = JSON.parse(localStorage.getItem('score')) || {
    win : 0,
    lose : 0,
    tie : 0
};
updateScore();

function updateScore(){
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.win}, Losses: ${score.lose}, Ties: ${score.tie}`;
}


function computerMove(){
    const comp=Math.random();
    let compMove;
    if(comp>=0 && comp<1/3){
        compMove = "rock";
    }
    else if(comp>=1/3 && comp<2/3){
        compMove = "scissors";
    }
    else if(comp>=2/3 && comp<1){
        compMove = "paper";
    }
    return compMove;
}

//let score = JSON.stringify()

function playerMove(player){
    const compMove = computerMove();
    // Rock
    if(compMove==="rock")
        if(player==="rock")
            result="Tie.";
        else if(player==='paper')
            result="You Win.";
        else
            result = "You Lose.";
        
        //scissors
    else if(compMove==='scissors')
        if(player==="rock")
            result="You Win.";
        else if(player==='paper')
            result="You Lose.";
        else
            result = "Tie.";
    
    //paper
    else if(compMove==='paper')
        if(player==='rock')
            result="You Lose.";
        else if(player==='paper')
            result="Tie.";
        else
            result = "You Win.";

    if(result==='You Win.') score.win++;
    else if(result==='You Lose.') score.lose++;
    else score.tie++;

    localStorage.setItem('score', JSON.stringify(score));
    updateScore();

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-move').innerHTML = `You <img src=images/${player}-emoji.png class='move-icon'>  
    <img src=images/${compMove}-emoji.png class='move-icon'> Computer `;
    
    
}