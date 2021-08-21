function fuel(input) {
    let petrol = input[0];
    let liters = Number(input[1]);

    if (petrol != 'Diesel' && petrol != 'Gasoline' && petrol != 'Gas') {
        console.log('Invalid fuel!');

    } else if (liters >= 25) {
        console.log(`You have enough ${(petrol.toLowerCase())}.`);

    } else if (liters < 25) {
        console.log(`Fill your tank with ${petrol.toLowerCase()}!`);
    }
}
fuel(['Diesel', '20'])