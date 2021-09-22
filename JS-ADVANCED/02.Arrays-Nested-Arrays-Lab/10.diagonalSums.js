function diagonalSum(input) {
    let firstDiag = 0;
    let secondDiag = 0;

    for (let i = 0; i < input.length; i++) {
        let lastIndex = input.length - 1 - i;
        firstDiag += input[i][i];
        secondDiag += input[i][lastIndex];
    }
    console.log(firstDiag + ' ' + secondDiag);

}
diagonalSum([
    [20, 40],
    [10, 60]
]);
diagonalSum([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
])