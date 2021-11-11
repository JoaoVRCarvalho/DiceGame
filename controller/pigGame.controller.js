'use strict';

// Player one
const player0Class = document.getElementsByClassName("player--0") // classe da section do player 1
const name0Field = document.getElementById("name--0");
const score0Field = document.getElementById("score--0");
const currentScore0Field = document.getElementById("current--0");

// Player two
const player1Class = document.getElementsByClassName("player--1") // classe da section do player 2
const name1Field = document.getElementById("name--1");
const score1Field = document.getElementById("score--1");
const currentScore1Field = document.getElementById("current--1");

// Dice
const imageField = document.getElementById("dice-image");
imageField.style.visibility = "hidden";

// Score
let currentScores = [0, 0]
let scores = [0, 0];

let activePlayer = 0;

function holdScore() {
    if (!winner) {
        holdedScoreAttribution(activePlayer, currentScores, scores);
        verifyPlayerScore(activePlayer, scores);
        currentScores[activePlayer] = 0;
    }  
}

function newGame() {
    winner = undefined;
    player0Class[0].classList.remove("player--winner");
    player1Class[0].classList.remove("player--winner");

    emptyScores();
}

function diceRoll() {
    if (!winner) {
        imageField.style.visibility = 'visible';
        let diceNumber = randomNumber();

        if (diceNumber != 1) {
            imageField.src = `../assets/images/dice-${diceNumber}.png`;
            currentScores[activePlayer] += diceNumber;
            currentScoreAttribution(activePlayer, currentScores);
        } else {
            imageField.src = `../assets/images/dice-${diceNumber}.png`;
            currentScores[activePlayer] = 0;
            currentScoreAttribution(activePlayer, currentScores);
            playerSwitch(activePlayer);
        }
    }
}
