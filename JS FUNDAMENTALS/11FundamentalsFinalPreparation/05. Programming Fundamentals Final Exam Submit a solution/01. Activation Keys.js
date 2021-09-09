function activationKeys(input) {

    let rawKey = input.shift();
    let myCommands = {
        Contains: contains,
        Flip: flip,
        Slice: slice
    }

    while (input[0] != 'Generate') {
        let tokens = input.shift().split('>>>');
        let command = tokens.shift();

        myCommands[command](...tokens)


    }

    console.log(`Your activation key is: ${rawKey}`);

    function contains(substring) {
        if (rawKey.includes(substring)) {
            console.log(`${rawKey} contains ${substring}`);
        } else {
            console.log('Substring not found!');
        }
    }

    function flip(capslock, startIndex, endIndex) {
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);
        let left = rawKey.substring(0, startIndex);
        let changed = rawKey.substring(startIndex, endIndex);
        let right = rawKey.substring(endIndex)
        if (capslock == 'Upper') {
            changed = changed.toUpperCase();
        } else if (capslock == 'Lower') {
            changed = changed.toLowerCase();

        }

        rawKey = left + changed + right;
        console.log(rawKey);
    }

    function slice(startIndex, endIndex) {
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);
        let left = rawKey.substring(0, startIndex);
        let right = rawKey.substring(endIndex)
        rawKey = left + right;
        console.log(rawKey);


    }
}

activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"
]);