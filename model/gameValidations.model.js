// See if the score is above 100, if above the current player wins.
let winner;

function verifyPlayerScore(player, scores) {
    if(scores[player] >= 50 ) {
        switch (player) {
            case 0:
                player0Class[0].classList.add("player--winner");
                winner = 1;
                break;
            case 1: 
                player1Class[0].classList.add("player--winner");
                winner = 2;
                break;
        }
        emptyScores();
    }
}

function playerSwitch(player) {
    player === 0 ? activePlayer = 1 : activePlayer = 0;
    player0Class[0].classList.toggle("player--active");
    player1Class[0].classList.toggle("player--active");
}

function emptyScores() {
    imageField.style.visibility = "hidden";
    currentScores = [0, 0];
    scores = [0, 0];
    activePlayer = 0;

    // Player one
    currentScore0Field.innerHTML = 0;
    score0Field.innerHTML = 0;

    // Player two
    currentScore1Field.innerHTML = 0;
    score1Field.innerHTML = 0;
}