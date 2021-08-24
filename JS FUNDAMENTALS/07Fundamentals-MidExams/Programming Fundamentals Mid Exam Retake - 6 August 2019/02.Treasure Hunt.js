function treasureHunt(input) {
    let myChest = input.shift().split('|');
    let command = input.shift();

    while (command !== 'Yohoho!') {
        command = command.split(' ');
        let currentCommand = command.shift();

        switch (currentCommand) {
            case 'Loot':
                for (let item of command) {
                    if (!myChest.includes(item)) {
                        myChest.unshift(item);
                    }
                }
                break;
            case 'Drop':
                command = Number(command);
                if (command >= 0 && command <= myChest.length - 1) {
                    let dropped = myChest.splice(command, 1);
                    myChest.push(dropped);
                }
                break;
            case 'Steal':
                command = Number(command);
                let stealed = [];
                for (let i = 0; i < command; i++) {
                    stealed.unshift(myChest.pop());
                    if (myChest.length == 0) {
                        break;
                    }
                }
                console.log(stealed.join(', '));
                break;
        }

        command = input.shift();
    }
    let sumLength = 0
    for (let loot of myChest) {
        sumLength += loot.length;
    }
    let result = sumLength / myChest.length;
    if (myChest.length > 0) {
        console.log(`Average treasure gain: ${result.toFixed(2)} pirate credits.`);
    } else {
        console.log('Failed treasure hunt.');
    }
}
treasureHunt((["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"
]));