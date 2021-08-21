function footballScore(input) {
    let firstMatch = input[0];
    let secondMatch = input[1];
    let thirdMatch = input[2];

    let firstHome = Number(firstMatch[0]);
    let firstAway = Number(firstMatch[2]);

    let secondHome = Number(secondMatch[0]);
    let secondAway = Number(secondMatch[2]);

    let thirdHome = Number(thirdMatch[0]);
    let thirdAway = Number(thirdMatch[2]);

    let teamWon = Number('');
    let teamLost = Number('');
    let teamDrawn = Number('');

    if (firstHome > firstAway) {
        teamWon += 1;
    } else if (firstHome < firstAway) {
        teamLost += 1;
    } else {
        teamDrawn += 1;
    }
    if (secondHome > secondAway) {
        teamWon += 1;
    } else if (secondHome < secondAway) {
        teamLost += 1;
    } else {
        teamDrawn += 1;
    }
    if (thirdHome > thirdAway) {
        teamWon += 1;
    } else if (thirdHome < thirdAway) {
        teamLost += 1;
    } else {
        teamDrawn += 1;
    }
    console.log(`Team won ${teamWon} games.`)
    console.log(`Team lost ${teamLost} games.`)
    console.log(`Drawn games: ${teamDrawn}`)
}
footballScore(["3:1", "0:2", "0:0"])
footballScore(["4:2", "0:3", "1:0"])
footballScore(["0:2", "0:1", "3:3"])
