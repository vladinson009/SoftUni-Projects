function easterCompetition(input) {
    let index = 0;
    let cakeNumber = Number(input[index++]);
    let nameOfTheBaker = input[index++];
    let command = input[index++];

    let topPoints = 0;
    let totalPoints = 0;
    let topBaker = ''
    for (let i = 1; i <= cakeNumber; i++) {
        while (command !== 'Stop') {
            let average = Number(command);
            totalPoints += average
            command = input[index++];
        }
        console.log(`${nameOfTheBaker} has ${totalPoints} points.`);
        if (totalPoints > topPoints) {
            console.log(`${nameOfTheBaker} is the new number 1!`);
            topPoints = totalPoints;
            topBaker = nameOfTheBaker
        }
        totalPoints = 0;
        nameOfTheBaker = input[index++];
        command = input[index++];
    }
    console.log(`${topBaker} won competition with ${topPoints} points!`);
}
easterCompetition(["2",
    "Chef Angelov",
    "9",
    "9",
    "9",
    "Stop",
    "Chef Rowe",
    "10",
    "10",
    "10",
    "10",
    "Stop"
])