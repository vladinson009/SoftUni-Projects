function manOWar(input) {

    let pirateship = input.shift().split('>').map(Number);
    let warship = input.shift().split('>').map(Number);
    let maxHealth = Number(input.shift());

    let command = input.shift();

    while (command !== 'Retire') {
        command = command.split(' ');
        let currentCommand = command.shift();
        command = command.map(Number);

        switch (currentCommand) {
            case 'Fire':
                if (command[0] >= 0 && command[0] <= warship.length - 1) {
                    warship[command[0]] -= command[1];
                    if (warship[command[0]] <= 0) {
                        console.log('You won! The enemy ship has sunken.');
                        return;
                    }
                }
                break;
            case 'Defend':
                if (command[0] >= 0 && command[1] >= 0 &&
                    command[0] <= pirateship.length - 1 &&
                    command[1] <= pirateship.length - 1) {
                    for (let i = command[0]; i <= command[1]; i++) {
                        pirateship[i] -= command[2];
                        if (pirateship[i] <= 0) {
                            console.log('You lost! The pirate ship has sunken.');
                            return;
                        }
                    }
                }
                break;
            case 'Repair':
                if (command[0] >= 0 && command[0] <= pirateship.length - 1) {
                    if (pirateship[command[0]] + command[1] <= maxHealth) {
                        pirateship[command[0]] += command[1];
                    } else {
                        pirateship[command[0]] = maxHealth;
                    }
                }
                break;
            case 'Status':
                let counter = 0;
                for (let i = 0; i < pirateship.length; i++) {
                    let lowerThanTweny = pirateship[i] / maxHealth * 100
                    if (lowerThanTweny < 20) {
                        counter++;
                    }
                }
                console.log(`${counter} sections need repair.`);
                break;
        }
        command = input.shift()
    }
    let pirateSum = 0;
    let warSum = 0;
    for (let health of pirateship) {
        pirateSum += health;
    }
    for (let health of warship) {
        warSum += health;
    }
    console.log(`Pirate ship status: ${pirateSum}`);
    console.log(`Warship status: ${warSum}`);

}
manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"
]);