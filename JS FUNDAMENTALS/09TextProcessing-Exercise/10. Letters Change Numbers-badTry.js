function lettersChangeNumbers(task) {
    let regex = / +/;
    let firstLetter = /\b[a-zA-Z]/;
    let lastLetter = /[a-zA-Z]\b/;

    let words = task.split(regex);

    let totalResult = 0;

    for (let each of words) {
        let first = firstLetter.exec(each)[0];
        let last = lastLetter.exec(each)[0];

        totalResult += letterBefore(first, last, each);
    }
    console.log(totalResult.toFixed(2));

    //////////////////////////////////////////////////////////////
    function letterBefore(input, inputAfter, each) {
        let result = 0;
        let alphaA = alphabet(input);
        let alphaB = alphabet(inputAfter);
        let theNumber = /\d+/;
        let num = theNumber.exec(each);
        if (input == input.toUpperCase()) {
            result = Number(num) / alphaA;
        } else if (input == input.toLowerCase()) {
            result = Number(num) * alphaA;
        }

        if (inputAfter == inputAfter.toUpperCase()) {
            result -= alphaB;
        } else if (inputAfter == inputAfter.toLowerCase()) {
            result += alphaB;
        }
        return Number(result);
    }

    function alphabet(letter) {
        letter = letter.toLowerCase()
        let alph = '0abcdefghijklmnopqrstuvwxyz'.split('');
        if (alph.indexOf(letter) > -1) {
            return alph.indexOf(letter);
        }
    }
}

lettersChangeNumbers('P34562Z q2576f   H456z');