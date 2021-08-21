function specialNumbers(input) {
    let specialNum = Number(input[0]);
    let printLine = '';
    for (let i = 1111; i <= 9999; i++) {
        let currentNum = '' + i;
        let isSpecial = true
        for (let j = 0; j < currentNum.length; j++) {
            let currentDigit = Number(currentNum[j])
            if (specialNum % currentDigit !== 0) {
                isSpecial = false;
                break;
            }
        }
        if (isSpecial) {
            printLine += `${currentNum} `
        }
    }
    console.log(printLine);
}
specialNumbers(["16"])