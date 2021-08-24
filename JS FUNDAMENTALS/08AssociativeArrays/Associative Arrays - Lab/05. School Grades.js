function schoolGrades(input) {

    myList = new Map();

    for (let el of input) {
        let tokens = el.split(' ');
        let name = tokens[0];
        let grades = tokens.splice(1, tokens.length).map(Number);
        if (!myList.has(name)) {
            myList.set(name, []);
            myList.set(name, myList.get(name).concat(grades));
        } else {
            myList.set(name, myList.get(name).concat(grades));
        }


    }
    let sorted = Array.from(myList).sort((a, b) => average(a, b));

    for (let [keys, value] of sorted) {
        console.log(`${keys}: ${value.join(', ')}`);
    }


    function average(a, b) {
        let aSum = 0;
        for (let i = 0; i < a[1].length; i++) {
            aSum += a[1][i];
        }
        let bSum = 0;
        for (let i = 0; i < b[1].length; i++) {
            bSum += b[1][i];
        }
        let aAvarage = aSum / a[1].length;
        let bAvarage = bSum / b[1].length;
        return aAvarage - bAvarage;
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);