function maxNumber(list) {
    let printLine = [];
    for (let i = 0; i < list.length; i++) {
        let currentNumber = list[i];
        let isCurrentTop = true;
        for (let j = i + 1; j < list.length; j++) {
            let numberFromRight = list[j]
            if (numberFromRight >= currentNumber) {
                isCurrentTop = false;
                break;
            }
        }
        if (isCurrentTop) {
            printLine.push(currentNumber)
        }
    }
    console.log(printLine.join(' '));
}
maxNumber([27, 19, 42, 2, 13, 45, 48])