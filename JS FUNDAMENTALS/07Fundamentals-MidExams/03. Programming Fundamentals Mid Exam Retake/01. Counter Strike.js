function counterStrike(input) {
    let initialEnergy = Number(input.shift());
    let wins = 0;
    for (let i = 0; i < input.length; i++) {
        let enemyDistance = input[i];
        if (enemyDistance === 'End of battle') {
            console.log(`Won battles: ${wins}. Energy left: ${initialEnergy}`);
            return;
        }
        enemyDistance = Number(enemyDistance);
        if (initialEnergy - enemyDistance < 0) {
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${initialEnergy} energy`);
            return;
        }
        wins++;
        initialEnergy -= enemyDistance;
        if (wins % 3 === 0) {
            initialEnergy += wins;
        }
    }
}
counterStrike(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"
]);