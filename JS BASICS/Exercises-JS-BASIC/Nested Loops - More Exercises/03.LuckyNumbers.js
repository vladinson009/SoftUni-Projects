function luckyNumbers(input) {
    let n = Number(input[0]);
    let printLine = '';
    for (let index0 = 1; index0 <= 9; index0++) {
        for (let index1 = 1; index1 <= 9; index1++) {
            for (let index2 = 1; index2 <= 9; index2++) {
                for (let index3 = 1; index3 <= 9; index3++) {
                    if (index0 + index1 === index2 + index3 && n % (index0 + index1) === 0) {
                        printLine = printLine + index0 + index1 + index2 + index3 + ' ';
                    }
                }
            }
        }
    }
    console.log(printLine);
}
luckyNumbers(['7'])