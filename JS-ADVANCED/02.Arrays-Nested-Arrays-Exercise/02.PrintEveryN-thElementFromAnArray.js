function printEveryN(arrayString, num) {
    let result = [];
    for (let i = 0; i < arrayString.length; i += num) {
        result.push(arrayString[i]);
    }
    return result;
}
console.log(printEveryN(['5',
        '20',
        '31',
        '4',
        '20'
    ],
    2));