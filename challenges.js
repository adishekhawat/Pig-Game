var scores,roundScore,activePlayer,dice,gamePlaying,lastDice,dice2;

init();
document.querySelector('.btn-roll').addEventListener('click', function(){
    
    if(gamePlaying){
        //Random number
        var dice = Math.floor(Math.random() * 6)+1;
        var dice1 = Math.floor(Math.random() * 6)+1;
        //Display the result
        var diceDOM = document.querySelector('.dice');
        var dice1DOM = document.querySelector('.dice1');
        diceDOM.style.display = 'block';
        dice1DOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        dice1DOM.src = 'dice-' + dice1 + '.png';
        //Update
        
        if(dice === 6 && lastDice === 6){
            scores[activePlayer] = 0;
            document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer]; 
            nextPlayer();
        }
        else if(dice !== 1){
            roundScore += dice;
            
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else{
            nextPlayer();
        }
        
        lastDice = dice
        
        }
    }
    
);

document.querySelector('.btn-hold').addEventListener('click',function(){
    //Add CURRENT Score to Global Score
    if(gamePlaying){
        scores[activePlayer] += roundScore;
        //Update the UI
        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer]; 
        
        var input = document.querySelector('.final-score').value;
        
        if(input){
            var winningScore = input;
        }else{
            winningScore = 100;
        }
        if(scores[activePlayer] >= winningScore){
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
    






















