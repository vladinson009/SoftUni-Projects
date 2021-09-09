function needForSpeed(input) {
    let myCars = {};
    let myCommands = {
        'Drive': drive,
        'Refuel': refuel,
        'Revert': revert
    };
    let n = Number(input.shift());
    for (let i = 0; i < n; i++) {
        let [car, mileage, fuel] = input.shift().split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);
        myCars[car] = {
            mileage,
            fuel
        }
    }
    while (input[0] != 'Stop') {
        let tokens = input.shift().split(' : ');
        let command = tokens.shift();
        let action = myCommands[command];
        action(...tokens);
    }
    let sortedCars = Object.entries(myCars).sort(sorting);

    for (each of sortedCars) {
        let currentCar = each[0];
        let mil = each[1].mileage;
        let fu = each[1].fuel;
        console.log(`${currentCar} -> Mileage: ${mil} kms, Fuel in the tank: ${fu} lt.`);
    }

    function drive(car, distance, fuel) {
        if (myCars[car].fuel < fuel) {
            console.log('Not enough fuel to make that ride');
        } else {
            myCars[car].fuel -= Number(fuel);
            myCars[car].mileage += Number(distance);
            console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
        }
        if (myCars[car].mileage >= 100000) {
            console.log(`Time to sell the ${car}!`);
            delete myCars[car];
        }
    }

    function refuel(car, fuel) {
        fuel = Number(fuel);
        if (myCars[car].fuel + fuel <= 75) {
            myCars[car].fuel += fuel;
            console.log(`${car} refueled with ${fuel} liters`);
        } else {
            let total = (75 - myCars[car].fuel);
            myCars[car].fuel = 75;
            console.log(`${car} refueled with ${total} liters`);
        }
    }

    function revert(car, kilometers) {
        myCars[car].mileage -= Number(kilometers);
        if (myCars[car].mileage < 10000) {
            myCars[car].mileage = 10000
        } else {
            console.log(`${car} mileage decreased by ${kilometers} kilometers`);

        }
    }

    function sorting(a, b) {
        let mileageA = a[1].mileage;
        let mileageB = b[1].mileage;
        let nameA = a[0];
        let nameB = b[0];

        return (mileageB - mileageA) || nameA.localeCompare(nameB)
    }
}
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);