function triangeOfNum(n) {
    for (let i = 1; i <= n; i++) {
        let printLine = '';
        
        for (let x = 1; x <= i; x++) {
            printLine += i + ' '
        }
        console.log(printLine);
    }
}
triangeOfNum(5)