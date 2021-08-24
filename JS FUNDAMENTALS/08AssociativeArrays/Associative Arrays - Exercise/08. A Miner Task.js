function minerTask(input) {
    let myResource = {};

    for (let i = 0; i < input.length - 1; i += 2) {
        if (!myResource.hasOwnProperty(input[i])) {
            myResource[input[i]] = Number(input[i + 1]);
        } else {
            myResource[input[i]] += Number(input[i + 1]);
        }
    }
    for (let key in myResource) {
        console.log(`${key} -> ${myResource[key]}`);

    }
}
minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);