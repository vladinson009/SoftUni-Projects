function stringSubstring(word, text) {

    text = text.split(' ');

    for (let each of text) {
        if (each.toLowerCase() === word.toLowerCase()) {
            return console.log(word.toLowerCase());
        }
    }
    console.log(`${word} not found!`);
}
stringSubstring('javas1cript', 'JavaScript is the best programming language');