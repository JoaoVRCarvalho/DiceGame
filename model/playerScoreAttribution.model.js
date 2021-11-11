function currentScoreAttribution(player, currentScore) {
    if (player === 0) {
        currentScore0Field.innerHTML = currentScore[player];
    } else if (player === 1) {
        currentScore1Field.innerHTML = currentScore[player];
    }
}

function holdedScoreAttribution(player, currentScore, scores) {
    if (player === 0) {
        currentScore0Field.innerHTML = 0;
        scores[player] += currentScore[player];
        score0Field.innerHTML = scores[player];
    } else if (player === 1) {
        currentScore1Field.innerHTML = 0;
        scores[player] += currentScore[player];
        score1Field.innerHTML = scores[player];
    }
}