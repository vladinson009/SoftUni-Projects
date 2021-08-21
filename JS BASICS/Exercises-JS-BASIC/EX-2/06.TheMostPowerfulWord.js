function powerfulWord(input) {
    index = 0
    let word = input[index++]
    let asciiAmount = 0
    let maxNum = Number.MIN_SAFE_INTEGER;
    let text = ''

    while (word !== 'End of words') {
        for (let i = 0; i < word.length; i++) {
            asciiAmount += word.charCodeAt(i);
        }
        switch ((word[0].toLowerCase())) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'y':
                asciiAmount *= word.length;
                break;
            default:
                asciiAmount = Math.floor(asciiAmount / word.length);
                break;
        }
        if (asciiAmount > maxNum) {
            maxNum = asciiAmount;
            text = word
        }
        asciiAmount = 0
        word = input[index++]
    }
    console.log(`The most powerful word is ${text} - ${maxNum}`)
}
powerfulWord(["But", "Some", "People", "Say", "It's", "LOVE", "End of words"])