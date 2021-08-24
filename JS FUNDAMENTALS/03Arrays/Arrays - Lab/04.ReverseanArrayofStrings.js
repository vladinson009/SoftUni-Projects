function reverseanArrayOfString(string) {
    let printLine = ''
    for (let i = string.length - 1; i >= 0; i--) {
        printLine += string[i] + ' ';
    }
    console.log(printLine.trim());

}
reverseanArrayOfString(['a', 'b', 'c', 'd', 'e'])