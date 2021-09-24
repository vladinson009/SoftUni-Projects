function extractIncreasingSubsequence(input) {
    let currentBiggest = Number.MIN_SAFE_INTEGER;
    let result = []
    for (let el of input) {
        if (el >= currentBiggest) {
            currentBiggest = el;
            result.push(el);
        }

    }
    return result;
}

function demo(input) {
    let currentBiggest = Number.MIN_SAFE_INTEGER;
    const result = input.filter(x => {
        if (x >= currentBiggest) {
            currentBiggest = x;
            return true;
        } else {
            return false;
        }
    })
    return result;
}
console.log(demo([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]));