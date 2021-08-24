function zooProblem(input) {

    let myZoo = {};
    let areas = {};
    let myCommands = {
        'Add': add,
        'Feed': feed
    };

    while (input[0] != 'EndDay') {
        let tokens = input.shift().split(': ');
        let command = tokens.shift();
        let values = tokens.join('').split('-')
        let action = myCommands[command];
        action(...values)
    }
    let sorted = Object.entries(myZoo).sort(sorting);
    console.log('Animals:');
    for (let each of sorted) {
        console.log(` ${each[0]} -> ${each[1].neededFood}g`);
    }
    let sortedArea = Object.entries(areas).sort(sortArea)
    console.log('Areas with hungry animals:');
    for (let every of sortedArea) {
        if (Number(every[1]) > 0) {
            console.log(` ${every[0]}: ${every[1]}`);

        }
    }


    function add(animalName, neededFoodQty, area) {
        neededFoodQty = Number(neededFoodQty);
        if (!myZoo.hasOwnProperty(animalName)) {
            myZoo[animalName] = {
                'neededFood': neededFoodQty,
                'area': area
            }
            if (!areas[area]) {
                areas[area] = 1;
            } else {
                areas[area] += 1;
            }
        } else {
            myZoo[animalName].neededFood += neededFoodQty
        }
    }

    function feed(animalName, food) {
        food = Number(food);
        if (myZoo.hasOwnProperty(animalName)) {
            myZoo[animalName].neededFood -= food;

            if (myZoo[animalName].neededFood <= 0) {
                console.log(`${animalName} was successfully fed`);
                let area = myZoo[animalName].area;
                areas[area] -= 1
                if (areas.hasOwnProperty(area))
                    if (areas[area] <= 0) {
                        delete areas[area]
                    }
                delete myZoo[animalName];
            }
        }
    }


    function sorting(a, b) {
        let qtyFoodA = a[1].neededFood;
        let qtyFoodB = b[1].neededFood;

        let nameA = a[0];
        let nameB = b[0];

        return qtyFoodB - qtyFoodA || nameA.localeCompare(nameB);
    }

    function sortArea(a, b) {
        let animalNumA = a[1];
        let animalNumB = b[1]
        let nameA = a[0];
        let nameB = b[0];

        return animalNumB - animalNumA || nameA.localeCompare(nameB);

    }
}
zooProblem((["Add: Jamie-600-WaterfallArea",
    "Add: Maya-6570-WaterfallArea",
    "Add: Adam-4500-ByTheCreek",
    "Add: Bobbie-6570-WaterfallArea",
    "Feed: Jamie-2000",
    "Feed: Adam-2000",
    "Feed: Adam-2500",
    "EndDay"
]))