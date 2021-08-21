function carNumber(input) {

    let first = Number(input[0]);
    let last = Number(input[1]);
    let printLine = '';
    for (let index0 = first; index0 <= last; index0++) {
        for (let index1 = first; index1 <= last; index1++) {
            for (let index2 = first; index2 <= last; index2++) {
                for (let index3 = first; index3 <= last; index3++) {
                    if ((index0 % 2 === 0 && index3 % 2 !== 0 || index0 % 2 !== 0 && index3 % 2 === 0) &&
                        index0 > index3 && (index1 + index2) % 2 === 0) {
                        printLine = printLine + index0 + index1 + index2 + index3 + ' ';
                    }

                }
            }
        }
    }
    console.log(printLine);
}
carNumber(['3', '5'])