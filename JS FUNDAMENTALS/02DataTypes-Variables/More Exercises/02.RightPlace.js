function rightPlace(string, char, correct) {
    let currentString = ''
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '_') {
            currentString += char;
        } else {
            currentString += string[i];
        }
    }
    if (currentString === correct) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}
rightPlace('Str_ng', 'I', 'Strong')