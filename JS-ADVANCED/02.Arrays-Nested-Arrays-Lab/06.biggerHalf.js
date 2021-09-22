function biggerHalf(input) {
    let half = Math.ceil((input.length) / 2);
    let result = input.sort((a, b) => a - b).slice(-half);

    return result;
}
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));