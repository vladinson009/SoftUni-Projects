function geometry(input) {
    let type = input[0];
    let sideA = Number(input[1]);
    let sideB = Number(input[2]);
    let result = Number('');

    if (type === 'square') {
        result = sideA * sideA;

    } else if (type === 'rectangle') {
        result = sideA * sideB;
    } else if (type === 'circle') {
        result = sideA * sideA * Math.PI;
    } else if (type === 'triangle') {
        result = sideA * sideB / 2;
    }
    console.log(result.toFixed(3))
}

geometry(["square", "5"])
geometry(["rectangle", "7", "2.5"])
geometry(["circle", "6"])
geometry(["triangle", "4.5", "20"])