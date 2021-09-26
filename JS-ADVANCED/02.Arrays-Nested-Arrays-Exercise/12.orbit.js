function orbit(input) {
    const width = input[0];
    const height = input[1];
    const x = input[2];
    const y = input[3];
    const matrix = [];


    for (let i = 0; i < width; i++) {
        let row = [];
        for (let j = 0; j < height; j++) {
            row.push(undefined);
        }
        matrix.push(row);
    }
    matrix[x][y] = 1;

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            matrix[i][j] = Math.max(Math.abs(x - i), Math.abs(y - j)) + 1;
        }

    }
    console.log(matrix.map(el => el.join(" ")).join("\n"));

}
orbit([4, 4, 2, 2]);