function piccolo(input) {

    let parking = {};

    for (let el of input) {
        let [direction, carNumber] = el.split(', ')

        if (direction === 'IN') {
            if (!parking.hasOwnProperty(carNumber)) {
                parking[carNumber] = 1;
            }
        } else {
            delete parking[carNumber];

        }
    }
    let sortedCars = Object.keys(parking).sort((a, b) => a.localeCompare(b));

    if (sortedCars.length > 0) {
        console.log(sortedCars.join('\n'));
    } else {
        console.log('Parking Lot is Empty');
    }


}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);