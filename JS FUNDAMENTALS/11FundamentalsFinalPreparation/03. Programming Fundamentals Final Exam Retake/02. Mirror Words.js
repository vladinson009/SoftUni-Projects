function mirrorWords(input) {
    let text = input[0];
    let pattern = /([@#])(?<word>[a-zA-Z]{3,})\1\1(?<wordTwo>[a-zA-Z]{3,})\1/g;
    let match = pattern.exec(text);

    let matchWords = [];
    let validPairs = false;
    let counter = 0;
    while (match !== null) {
        counter++;
        validPairs = true;
        let word = match[2];
        let wordTwo = match[3];
        let wordTwoReversed = wordTwo.split('').reverse().join('');

        if (word === wordTwoReversed) {
            matchWords.push(`${word} <=> ${wordTwo}`)
        }



        match = pattern.exec(text);
    }
    if (!validPairs) {
        console.log('No word pairs found!');
    } else {
        console.log(`${counter} word pairs found!`);
    }
    if (matchWords.length == 0) {
        console.log('No mirror words!');
    } else {
        console.log(`The mirror words are:
${matchWords.join(', ')}`);
    }
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);