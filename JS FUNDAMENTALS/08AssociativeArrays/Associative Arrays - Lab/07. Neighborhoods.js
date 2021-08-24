function neighborhoods(input) {

    let neighbourhood = input.shift().split(', ');
    let myObj = {};

    for (let el of input) {
        let tokens = el.split(' - ');
        let currentNeighbor = tokens[0];
        let person = tokens[1];
        if (neighbourhood.includes(currentNeighbor)) {

            if (!myObj.hasOwnProperty(currentNeighbor)) {
                myObj[currentNeighbor] = [];
                myObj[currentNeighbor].push(person);
            } else {
                myObj[currentNeighbor].push(person);
            }
        }
    }
    for (let el of neighbourhood) {
        if (!myObj.hasOwnProperty(el)) {
            myObj[el] = [];
        }
    }
    let sorted = Object.keys(myObj).sort((a, b) => a.length - b.length)

    for (let el of sorted) {
        console.log(`${el}: ${myObj[el].length}`);
        for (let i = 0; i < myObj[el].length; i++) {
            console.log(
                `--${myObj[el][i]}`
            );
        }
    }



}
// neighborhoods(['Abbey Street, Herald Street, Bright Mews',
//     'Bright Mews - Garry',
//     'Bright Mews - Andrea',
//     'Invalid Street - Tommy',
//     'Abbey Street - Billy'
// ]);


////////////////////////////////////////////////////////////////
function solve() {



}
solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'
]);