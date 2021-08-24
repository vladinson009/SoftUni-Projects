function pascalCase(input) {
    let words = [];
    let currentWord = ''
    for (let i = 0; i < input.length; i++) {
        if (input[i].charCodeAt(0) >= 65 && input[i].charCodeAt(0) <= 90) {
            if (currentWord.length > 0) {
                words.push(currentWord);
            }
            currentWord = ''
            currentWord += input[i];
        } else
            currentWord += input[i];

    }
    words.push(currentWord);
    console.log(words.join(', '));

}
pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCase('HoldTheDoor')
pascalCase('ThisIsSoAnnoyingToDo')