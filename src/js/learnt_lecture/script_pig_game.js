/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


console.log('you are in script_pig_game.js file')
var scores, rollingScore, activePlayer, winScore;

initialize();
//document.querySelector('#current-'+activePlayer).textContent = dice;
//document.querySelector('#score-'+activePlayer).innerHTML = '<em>'+dice+'</em>'

// this one is to read the value via query selector
// var output = document.querySelector('#score-1').textContent;
//cconsole.log(output);


document.querySelector('.dice').style.display = 'none';

// to refer event listner go to https://developer.mozilla.org/en-US/docs/Web/Events

document.querySelector('.btn-roll').addEventListener('click', function () {

    winScore = document.getElementById('finalScore').value;
    // undefine, 0, null or "" are COERCED to false  -- > if(winscore) will check all these conditions
    // Anything else is COERCED to true.
    if (!winScore || winScore < 0) {
        alert("First enter the Final Score");
        return;
    }
    console.log("winScore" + winScore)
    //1. generate the random number on rolling of dice
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. show and update the image according to the random number generated...
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';

    diceDom.src = '../dist/images/dice-' + dice + '.png'

    //3. update the current score while the randam number is not equals to 1

    if (dice !== 1) {
        rollingScore += dice
        document.getElementById('current-' + activePlayer).textContent = rollingScore;
    } else {
        //next player turn
        nextPlayerTurn();
    }

});


document.querySelector('.btn-hold').addEventListener('click', function () {
    scores[activePlayer] += rollingScore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    if (scores[activePlayer] >= winScore) {
        document.getElementById('name-' + activePlayer).textContent = 'Winner';
        document.querySelector('.divOuterPanel' + 0).classList.remove('active');
        document.querySelector('.divOuterPanel' + 1).classList.remove('active');
        document.querySelector('.divOuterPanel' + activePlayer).classList.add('winner');
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.btn-new').style.display = 'block';
        document.querySelector('.btn-roll').style.display = 'none';
        document.querySelector('.btn-hold').style.display = 'none';
    } else {
        nextPlayerTurn();
    }


});


function nextPlayerTurn() {

    //document.querySelector('.divOuterPanel'+activePlayer).classList.toggle('active');
    document.querySelector('.divOuterPanel' + activePlayer).classList.remove('active');
    activePlayer = (activePlayer !== 0) ? 0 : 1;
    // console.log("activePlayer: "+activePlayer)
    document.querySelector('.divOuterPanel' + activePlayer).classList.add('active');
    //document.querySelector('.divOuterPanel'+activePlayer).classList.toggle('active');
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.dice').style.display = 'none';
    rollingScore = 0;
}


document.querySelector('.btn-new').addEventListener('click', initialize);



function initialize() {

    scores = [0, 0];
    rollingScore = 0;
    activePlayer = 0;
    winScore = -1;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.divOuterPanel' + 1).classList.remove('active');
    document.querySelector('.divOuterPanel' + 0).classList.remove('winner');
    document.querySelector('.divOuterPanel' + 1).classList.remove('winner');
    document.querySelector('.divOuterPanel' + 0).classList.add('active');

    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('.btn-new').style.display = 'none';
    document.getElementById('finalScore').value = '';

}



function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;

    return true;
}





/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/