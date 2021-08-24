function partyTime(input) {
    let guestsList = {
        vip: [],
        regular: []
    };
    let partyIndex = input.indexOf('PARTY');

    for (let i = 0; i < partyIndex; i++) {
        let el = input[i];
        if (isNaN(el[0])) {
            guestsList.regular.push(el);
        } else {
            guestsList.vip.push(el);
        }
    }
    for (let i = partyIndex + 1; i < input.length; i++) {
        let element = input[i];
        if (guestsList.regular.includes(element)) {
            let idx = guestsList.regular.indexOf(element);
            guestsList.regular.splice(idx, 1);
        } else if (guestsList.vip.includes(element)) {
            let idx = guestsList.vip.indexOf(element);
            guestsList.vip.splice(idx, 1);

        }
    }
    console.log(guestsList.regular.length + guestsList.vip.length);
    let newList = guestsList.vip.concat(guestsList.regular);
    console.log(newList.join('\n'));
}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);