function equalSums(input) {
    let first = Number(input[0]);
    let last = Number(input[1]);
    let printLine = '';
    for (let i = first; i <= last; i++) {
        let even = 0;
        let odd = 0;
        let currentNum = '' + i;

        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum[j]);
            if (j % 2 === 0) {
                even += currentDigit;
            } else {
                odd += currentDigit;
            }
        }

        if (odd === even) {
            printLine += `${currentNum} `;
        }
    }
    console.log(printLine);
}
equalSums(["100000", "100050"])