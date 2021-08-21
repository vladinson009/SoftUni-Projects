function numberPyramid(input) {

    let target = Number(input[0]);
    let currentNum = 0;
    let isEqual = false;
    for (let rows = 1; rows <= target; rows++) {
        let printLine = ''
        for (let cols = 1; cols <= rows; cols++) {
            currentNum++
            printLine += `${currentNum} `
            if (currentNum === target) {
                isEqual = true;
                break;
            }
        }
        console.log(printLine);
        if (isEqual) {
            break;
        }
    }
}
numberPyramid(["7"])