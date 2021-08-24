function NxNMatrix(matrix) {

    function rows(numb) {
        let printLine = [];
        for (let i = 0; i < numb; i++) {
            printLine[i] = numb;
        }
        printLine = printLine.join(' ');
        return printLine;
    }
    let theRow = rows(matrix)
    for (let i = 0; i < matrix; i++) {
        console.log(theRow);
    }
}

NxNMatrix(10)