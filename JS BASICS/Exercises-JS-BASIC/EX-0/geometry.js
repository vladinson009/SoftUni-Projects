function geometry(input) {
    let typeOfFigure = input[0];
    if (typeOfFigure === 'square') {
        let num = Number(input[1]);
        let area = num * num;
        console.log(area.toFixed(3));
    } else if (typeOfFigure === 'rectangle') {
        let numA = Number(input[1]);
        let numB = Number(input[2]);
        let area = numA * numB;
        console.log(area.toFixed(3))
    } else if (typeOfFigure === 'circle') {
        let r = Number(input[1]);
        let area = Math.PI * r * r;
        console.log(area.toFixed(3))
    } else if (typeOfFigure === 'triangle') {
        let numA = Number(input[1]);
        let numB = Number(input[2]);
        let area = numA * numB / 2;
        console.log(area.toFixed(3))
    } else console.log('Not defined!')

}
geometry(['triangle', '4.5', '20'])