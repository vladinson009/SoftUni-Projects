function wordsUppercase(string) {

    let pattern = /\w+/g;

    let match = string.match(pattern);
    let result = match.join(', ').toUpperCase();
    console.log(result)

}
wordsUppercase('Hi, how are you?');