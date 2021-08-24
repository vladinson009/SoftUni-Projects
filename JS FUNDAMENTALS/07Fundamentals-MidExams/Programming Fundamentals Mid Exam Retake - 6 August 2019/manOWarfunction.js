function manOWarFunction(input) {
    let myShip = input.shift().split('>').map(Number);
    let enemyShip = input.shift().split('>').map(Number);
    let maxHealth = Number(input.shift());
    let end = false;
    let commands = {
        fire(index, damage) {
            if (index >= 0 && index < enemyShip.length) {
                enemyShip[index] -= damage;
                if (enemyShip[index] <= 0) {
                    console.log('You won! The enemy ship has sunken.');
                    return end = true;
                }
            }
        },
        defend(startIndex, endIndex, damage) {
            if (startIndex >= 0 && startIndex < myShip.length &&
                endIndex >= 0 && endIndex < myShip.length) {
                for (let i = startIndex; i <= endIndex; i++) {
                    myShip[i] -= damage;
                    if (myShip[i] <= 0) {
                        console.log('You lost! The pirate ship has sunken.');
                        return end = true;
                    }
                }

            }
        },
        repair(index, health) {
            if (index >= 0 && index < myShip.length) {
                if (myShip[index] + health <= maxHealth) {
                    myShip[index] += health

                } else {
                    myShip[index] = maxHealth;
                }
            }
        },
        status() {
            let count = 0;
            for (let i = 0; i < myShip.length; i++) {
                let lowerThanTweny = myShip[i] / maxHealth * 100
                if (lowerThanTweny < 20) {
                    count++
                }
            }
            console.log(`${count} sections need repair.`)
        }
    }

    let currentCommand = input.shift();

    while (currentCommand !== 'Retire') {
        currentCommand = currentCommand.split(' ');
        let action = currentCommand.shift();
        currentCommand = currentCommand.map(Number);

        commands[action.toLowerCase()](...currentCommand)
        if (end) {
            return;
        }

        currentCommand = input.shift();
    }

    let myShipStatus = myShip.reduce((a, b) => a + b, 0);
    let enemyShipStatus = enemyShip.reduce((a, b) => a + b, 0);
    console.log(`Pirate ship status: ${myShipStatus}`);
    console.log(`Warship status: ${enemyShipStatus}`);

}
manOWarFunction(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"
])