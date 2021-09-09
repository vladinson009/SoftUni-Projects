function pirates(input) {
    let myCities = {};
    let myCommands = {
        'Plunder': plunder,
        'Prosper': prosper
    };
    while (input[0] != 'Sail') {
        let tokens = input.shift().split('||');
        let town = tokens[0];
        let people = Number(tokens[1]);
        let gold = Number(tokens[2]);
        if (myCities.hasOwnProperty(town)) {
            myCities[town].people += people;
            myCities[town].gold += gold;
        } else {
            myCities[town] = {
                people,
                gold
            }
        }
    };
    input.shift();
    while (input[0] != 'End') {
        let tokens = input.shift().split('=>');
        let command = tokens.shift();
        let action = myCommands[command];
        action(...tokens)
    }
    let sorted = Object.entries(myCities).sort(sorting);

    if (sorted.length > 0) {
        console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);
        for (let each of sorted) {
            let town = each[0];
            let people = myCities[town].people;
            let gold = myCities[town].gold;
            console.log(`${town} -> Population: ${people} citizens, Gold: ${gold} kg`);
        }
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }

    function plunder(town, people, gold) {
        people = Number(people);
        gold = Number(gold);
        console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
        myCities[town].gold -= gold;
        myCities[town].people -= people;
        if (myCities[town].gold <= 0 || myCities[town].people <= 0) {
            console.log(`${town} has been wiped off the map!`);
            delete myCities[town];
        }

    }

    function prosper(town, gold) {
        gold = Number(gold);
        if (gold < 0) {
            console.log('Gold added cannot be a negative number!');
        } else {
            myCities[town].gold += gold;
            console.log(`${gold} gold added to the city treasury. ${town} now has ${myCities[town].gold} gold.`);
        }

    }

    function sorting(a, b) {
        let goldA = a[1].gold;
        let goldB = b[1].gold;
        let nameA = a[0];
        let nameB = b[0];
        return goldB - goldA || nameA.localeCompare(nameB);
    }
}

pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"
]);