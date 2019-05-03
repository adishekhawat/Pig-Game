var scores,roundScore,activePlayer,dice,gamePlaying,dice1,dice2;

init();
document.querySelector('.btn-roll').addEventListener('click', function(){
    
    if(gamePlaying){
        //Random number
        var dice = Math.floor(Math.random() * 6)+1;
        //Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        //Update
        if(dice !== 1){
            dice1 = roundScore;
            dice2 = (roundScore += dice);
            
            
            if(dice1 + dice2 == 12){
                nextPlayer();
            }       
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else{
            nextPlayer();
        }
        
        }
    }
    
);

document.querySelector('.btn-hold').addEventListener('click',function(){
    //Add CURRENT Score to Global Score
    if(gamePlaying){
        scores[activePlayer] += roundScore;
        //Update the UI
        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer]; 
    
        //Check if won the game
        if(scores[activePlayer] >= 100){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-'+activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-'+activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }else{
            nextPlayer();}
}});



function nextPlayer(){
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore =0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display='none';
        
}

document.querySelector('.btn-new').addEventListener('click',init)
function init(){
    gamePlaying = true;
    scores=[0,0];
    activePlayer =0;
    roundScore = 0;
    
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.getElementById('name-1').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 1';
    
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    document.querySelector('.player-0-panel').classList.add('active');
}
    






















