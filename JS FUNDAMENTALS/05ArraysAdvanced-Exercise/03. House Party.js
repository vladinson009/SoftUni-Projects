function houseParty(list) {
    let guestList = [];
    for (let i = 0; i < list.length; i++) {
        let currentGuest = list[i];
        if (currentGuest.includes('is going!')) {
            currentGuest = currentGuest.split(' ');
            if (guestList.includes(currentGuest[0])) {
                console.log(`${currentGuest[0]} is already in the list!`);
            } else {
                guestList.push(currentGuest[0]);
            }

        } else {
            currentGuest = currentGuest.split(' ');
            if (guestList.includes(currentGuest[0])) {
                let idx = guestList.indexOf(currentGuest[0]);
                guestList.splice(idx, 1)
            } else {
                console.log(`${currentGuest[0]} is not in the list!`);
            }

        }
    }
    console.log(guestList.join('\n'));
}

houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'
])