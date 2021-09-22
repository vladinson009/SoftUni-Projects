function pieceOfPie(array, firstFlavor, secondFlavor) {

    let start = array.indexOf(firstFlavor);
    let end = array.indexOf(secondFlavor);
    let result = array.slice(start, end + 1);
    return result
}
console.log(pieceOfPie(['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'
    ],
    'Key Lime Pie',
    'Lemon Meringue Pie'));