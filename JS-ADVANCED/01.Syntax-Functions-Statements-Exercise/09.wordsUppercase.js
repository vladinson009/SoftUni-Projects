function wordsUppercase(string) {

    let pattern = /\w+/g;

    let match = string.match(pattern);
    console.log(match.join(', ').toUpperCase())

}
wordsUppercase('Hi, how are you?');