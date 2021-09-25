function magicMatrices(matrix) {
    let isMagic = true;
    let sum = matrix[0].reduce((a, b) => a + b, 0);
    for (let i = 0; i < matrix.length; i++) {
        let sumV = 0;
        let sumH = 0;
        for (let j = 0; j < matrix.length; j++) {
            sumV += matrix[j][i];
            sumH += matrix[i][j];
        }
        if (sumV != sum || sumH != sum) {
            isMagic = false;
            return false
        }
    }
    return true;
}
console.log(magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));