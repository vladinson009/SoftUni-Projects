function basketTournament(input) {
    let index = 0;
    let nameOfTournament = input[index++];
    let numberOfMatches = Number(input[index++]);
    let ourPoints = 0
    let opponentPoints = 0

    let ourTotalWin = 0;
    let ourTotalLost = 0;
    let gameNumber = 0
    let result = 0;

    while (nameOfTournament !== "End of tournaments") {
        for (let i = 1; i <= numberOfMatches; i++) {
            ourPoints = Number(input[index++]);
            opponentPoints = Number(input[index++]);
            result = ourPoints - opponentPoints;
            gameNumber++
            if (ourPoints > opponentPoints) {
                ourTotalWin++
                console.log(`Game ${i} of tournament ${nameOfTournament}: win with ${Math.abs(result)} points.`);
            } else {
                ourTotalLost++
                console.log(`Game ${i} of tournament ${nameOfTournament}: lost with ${Math.abs(result)} points.`);
            }
        }
        nameOfTournament = input[index++];
        numberOfMatches = Number(input[index++]);
    }
    console.log(`${(ourTotalWin / gameNumber * 100).toFixed(2)}% matches win`);
    console.log(`${(ourTotalLost / gameNumber * 100).toFixed(2)}% matches lost`);
}
basketTournament(["Dunkers", "2", "75", "65", "56", "73", "Fire Girls", "3", "67", "34", "83", "98", "66", "45", "End of tournaments"])