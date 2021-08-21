function equalSumsEvenOdd(input) {
    let first = Number(input[0]);
    let last = Number(input[1]);
    let printLine = '';
    for (let i = first; i <= last; i++) {
        let currentNum = '' + i;
        let odd = 0;
        let even = 0;
        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum[j]);
            if (j % 2 == 0) {
                even += currentDigit;
            } else {
                odd += currentDigit;
            }
        }
        if (odd === even) {
            printLine += `${i} `
        }
    }
    console.log(printLine);
}
equalSumsEvenOdd(["100000", "100050"])