function theImitationGame(input) {
    let actions = {
        'Move': move,
        'Insert': insert,
        'ChangeAll': changeAll,
    };
    let message = input.shift();
    while (input[0] != 'Decode') {
        let tokens = input.shift().split('|');
        let command = tokens.shift();
        let action = actions[command];
        action(...tokens);
    }
    console.log(`The decrypted message is: ${message}`);
    ///////////////////////////////////////////////////////////////////
    function move(numLetters) {
        numLetters = Number(numLetters);
        let left = message.substring(0, numLetters);
        let right = message.substring(numLetters);
        return message = right + left;
    }

    function insert(index, value) {
        //Inserts the given value before the given index in the string.
        let left = message.substring(0, index);
        let right = message.substring(index);
        return message = left + value + right;

    }

    function changeAll(substri, replacement) {
        return message = message.split(substri).join(replacement);
    }
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
]);