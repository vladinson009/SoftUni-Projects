function race(input) {
    let racers = {};
    let currentRacers = input.shift().split(', ');
    let patternName = /[A-Za-z]/g;
    let patternDistance = /\d/g;

    for (let each of currentRacers) {
        racers[each] = 0;
    }

    while (input[0] != 'end of race') {
        let line = input.shift();

        let matchName = line.match(patternName).join('');
        let matchDistance = line.match(patternDistance).map(Number).reduce((a, b) => a + b, 0);

        if (racers.hasOwnProperty(matchName)) {
            racers[matchName] += matchDistance;
        }

    }
    let sortedRacers = Object.entries(racers).sort((a, b) => b[1] - a[1]).slice(0, 3);
    let placesCount = 1;
    let places = {
        1: 'st',
        2: 'nd',
        3: 'rd'
    }
    for (let every of sortedRacers) {
        console.log(`${placesCount}${places[placesCount]} place: ${every[0]}`);
        placesCount++
    }

}

race(["George, Peter, Bill, Tom",
    "G4e@55or%6g6!68e!!@",
    "R1@!3a$y4456@",
    "B5@i@#123ll",
    "G@e54o$r6ge#",
    "7P%et^#e5346r",
    "T$o553m&6",
    "end of race"
]);