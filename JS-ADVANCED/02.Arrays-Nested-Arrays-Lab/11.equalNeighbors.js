function equalNeighbors(input) {
    let counter = 0;
    for (let i = 0; i < input.length; i++) {

        for (let j = 0; j < input[0].length; j++) {
            let el = input[i][j];
            let nextEl = input[i][j + 1];

            if (el == nextEl) {
                counter++;
            }
            if (i != input.length - 1 && el == input[i + 1][j]) {
                counter++
            }
        }
    }
    return counter;
}
console.log(equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]));