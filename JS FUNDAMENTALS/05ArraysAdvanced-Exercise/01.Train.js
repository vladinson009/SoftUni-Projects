function theTrain(array) {
    let wagon = array.shift().split(' ').map(Number);
    let maxPassenger = Number(array.shift())

    for (let command of array) {
        let current = command.split(' ');
        if (current[0] !== 'Add') {
            for (let i = 0; i < wagon.length; i++) {
                let newPassenger = Number(current[0]);
                if (wagon[i] + newPassenger <= maxPassenger) {
                    wagon[i] += newPassenger;
                    break;
                }
            }
        } else {
            wagon.push(Number(current[1]))
        }
    }
    console.log(wagon.join(' '));
}
theTrain(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6'
])