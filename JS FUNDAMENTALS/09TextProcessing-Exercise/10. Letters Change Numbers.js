function lettersChangeNumber(text) {
    let regex = /\b[A-Za-z]\d+[A-Za-z]\b/g;
    let alph = '0abcdefghijklmnopqrstuvwxyz'.split('');

    text = text.match(regex);
    let result = 0;

    for (let each of text) {
        let currentData = each.split('');
        let [first, last, theNum] = [currentData.shift(), currentData.pop(), Number(currentData.join(''))];
        let firstIndex = alph.indexOf(first.toLowerCase());
        let lastIndex = alph.indexOf(last.toLowerCase());

        if (first == first.toUpperCase()) {
            result += (theNum / firstIndex);
        } else {
            result += (theNum * firstIndex);
        }
        if (last == last.toUpperCase()) {
            result -= lastIndex;
        } else {
            result += lastIndex;
        }
    }
    console.log(result.toFixed(2));

}

lettersChangeNumber('a1A');