function plantDiscovery(input) {
    let n = Number(input.shift());
    let myPlants = {};
    let myCommands = {
        'Rate': rate,
        'Update': update,
        'Reset': reset
    };

    for (let i = 0; i < n; i++) {
        let [plantName, rarity] = input.shift().split('<->');
        rarity = Number(rarity)
        myPlants[plantName] = {
            rarity,
            rating: []
        }
    }

    while (input[0] != 'Exhibition') {
        let tokens = input.shift().split(': ');
        let command = tokens.shift();
        tokens = tokens.join('').split(' - ');
        let action = myCommands[command];
        action(...tokens);
    }

    let sorted = Object.entries(myPlants).sort(sortering);
    console.log('Plants for the exhibition:');
    for (let each of sorted) {
        let totalRateing = 0
        // each[1].rating.reduce((x, y) => x + y, 0) / each[1].rating.length;
        for (every of each[1].rating) {
            totalRateing += Number(every);
        }
        let avg = totalRateing / myPlants[each[0]].rating.length;
        if (myPlants[each[0]].rating.length == 0) {
            avg = Number(0)
        }
        console.log(`- ${each[0]}; Rarity: ${each[1].rarity}; Rating: ${avg.toFixed(2)}`);

    }

    function rate(plant, rating) {
        rating = Number(rating);
        if (myPlants.hasOwnProperty(plant)) {
            myPlants[plant].rating.push(Number(rating));
        } else {
            console.log('error');
        }

    }

    function update(plant, newRarity) {
        newRarity = Number(newRarity);
        if (myPlants.hasOwnProperty(plant)) {
            myPlants[plant].rarity = Number(newRarity);
        } else {
            console.log('error');
        }

    }

    function reset(plant) {
        if (myPlants.hasOwnProperty(plant)) {
            myPlants[plant].rating.length = 0;

        } else {
            console.log('error');
        }

    }

    function sortering(a, b) {
        let rarityA = a[1].rarity;
        let rarityB = b[1].rarity;
        let avgRateingA = 0
        for (let each of a[1].rating) {
            avgRateingA += Number(each);
        }
        let avgRateingB = 0
        for (let each of b[1].rating) {
            avgRateingB += Number(each);
        }
        return (rarityB - rarityA) || (avgRateingB - avgRateingA)
    }
};

plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"
]);