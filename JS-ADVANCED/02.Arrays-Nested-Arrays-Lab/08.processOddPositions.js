function processOddPositions(input) {
    let result = [];
    for (let i = 1; i < input.length; i += 2) {
        result.push(input[i]);
    }
    result = result.map(x => x = x * 2)
        .reverse()
    return result.join(' ')
}
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));