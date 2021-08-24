function triplesOfLatinLetters(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                let firstLetter = String.fromCharCode(97 + i)
                let secondLetter = String.fromCharCode(97 + j)
                let thirdLetter = String.fromCharCode(97 + k)
                let printLine = firstLetter + secondLetter + thirdLetter
                console.log(printLine);
            }
        }
    }
}
triplesOfLatinLetters(3)