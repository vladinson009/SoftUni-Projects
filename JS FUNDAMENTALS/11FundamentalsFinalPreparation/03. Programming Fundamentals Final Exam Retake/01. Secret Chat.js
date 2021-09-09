function secretChat(input) {
    let myCommands = {
        'InsertSpace': insertSpace,
        'Reverse': reverse,
        'ChangeAll': changeAll
    }
    let text = input.shift();

    while (input[0] != 'Reveal') {
        let tokens = input.shift().split(':|:');
        let command = tokens.shift();
        let action = myCommands[command];
        action(...tokens)

    }
    console.log(`You have a new text message: ${text}`);

    function insertSpace(index) {
        index = Number(index);
        if (index >= 0 && index < text.length) {
            let left = text.substring(0, index);
            let right = text.substring(index);
            text = left + ' ' + right;
            console.log(text);
        }
    }

    function reverse(substring) {
        if (text.includes(substring)) {
            text = text.replace(substring, '');
            let reversed = substring.split('').reverse().join('');
            text += reversed;
            console.log(text);

        } else {
            console.log('error');
        }
    }

    function changeAll(substring, replacement) {
        if (text.includes(substring)) {
            text = text.split(substring).join(replacement);
            console.log(text);
        }
    }
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])