function maxSequence(list) {
    let topPrintLine = []
    for (let i = 0; i < list.length; i++) {
        let printLine = [];
        for (let j = 0; j < list.length; j++) {
            if (list[i] === list[j + i]) {
                printLine.push(list[i])
            } else {
                break
            }
        }
        if (printLine.length > topPrintLine.length) {
            topPrintLine = printLine
        }
    }
    console.log(topPrintLine.join(' '));
}
maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3])