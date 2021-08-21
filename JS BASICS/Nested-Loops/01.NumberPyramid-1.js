function pyramid(input) {

    let num = Number(input[0]);
    let counter = 0;
    let isTrue = false
    for (let rows = 1; rows <= num; rows++) {
        let printLine = ''
        for (let cols = 1; cols <= rows; cols++) {
            counter++
            printLine += `${counter} `
            if (counter === num) {
                isTrue = true;
                break
            }
        }
        console.log(printLine);
        if (isTrue) {
            break;
        }
    }
}
pyramid(["7"])