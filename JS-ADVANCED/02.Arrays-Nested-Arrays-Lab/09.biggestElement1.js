function biggestElement(input) {
    let result = [];
    for (let each of input) {
        for (let num of each) {
            result.push(num);
        }
    }
    result = result
        .sort((a, b) => a - b)
        .slice(-1)
        .join('');
    return result;
}
console.log(biggestElement([
    [20, 50, 10],
    [8, 33, 145]
]));
///////////////////////////////////////////////////////////////////////////////////////
function demo(input) {

    let arr = []
        .concat(...input)
        .sort((a, b) => a - b)
        .slice(-1)
        .join('')
    return arr
}
console.log(demo([
    [20, 50, 10],
    [8, 33, 145]
]));
///////////////////////////////////////////////////////////////////////////////////////
function demo2(input) {
    let biggestEl = Number.MIN_SAFE_INTEGER;
    for (let each of input) {
        for (let num of each) {
            if (num > biggestEl) {
                biggestEl = num;
            }
        }
    }
    return biggestEl;
}
console.log(demo2([
    [20, 50, 10],
    [8, 33, 145]
]));