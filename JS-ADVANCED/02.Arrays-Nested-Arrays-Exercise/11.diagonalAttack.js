function diagonalAttack(input) {
    const matrix = [];
    // creating matrix
    for (let i = 0; i < input.length; i++) {
        const current = input[i].split(' ').map(Number);
        matrix.push(current);
    }
    let firstDiag = 0;
    let secondDiag = 0;
    // sum diagonals
    for (let i = 0; i < matrix.length; i++) {
        firstDiag += matrix[i][i];
        secondDiag += matrix[i][matrix.length - 1 - i];
    }
    if (firstDiag == secondDiag) {

        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (i != j && i != matrix.length - 1 - j) {
                    matrix[i][j] = firstDiag;
                }
            }
        }
    }
    for (let each of matrix) {
        console.log(each.join(' '));
    }
}
diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0'
]);