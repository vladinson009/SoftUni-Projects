function heartDelivery(list) {
    let houses = list.shift().split('@').map(Number);
    let command = list.shift();

    let index = 0;
    while (command !== 'Love!') {
        let tokens = command.split(' ');
        let jump = Number(tokens[1]);
        index += jump;
        if (index >= houses.length) {
            index = 0;
        }
        if (houses[index] === 0) {
            console.log(`Place ${index} already had Valentine's day.`);
        } else {
            houses[index] -= 2;
            if (houses[index] === 0) {
                console.log(`Place ${index} has Valentine's day.`);
            }
        }
        command = list.shift();
    }
    console.log(`Cupid's last position was ${index}.`);
    let filteredHouses = houses.filter(x => x > 0).length;
    if (filteredHouses == 0) {
        console.log('Mission was successful.');
    } else {

        console.log(`Cupid has failed ${filteredHouses} places.`);
    }
}
heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"
]);