function charactersInRange(firstChar, secondChar) {

    function ascii(one, two) {
        let printLine = '';
        let first = one.charCodeAt(0);
        let last = two.charCodeAt(0);

        if (last < first) {
            let temp = first;
            first = last;
            last = temp;
        }
        for (let i = first + 1; i < last; i++) {
            let symbol = String.fromCharCode(i)
            printLine += symbol + ' ';
        }
        return printLine;

    }
    let result = ascii(firstChar, secondChar);
    console.log(result);

}
charactersInRange('C', '#')