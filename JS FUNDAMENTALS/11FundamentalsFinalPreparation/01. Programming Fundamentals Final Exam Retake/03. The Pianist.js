function thePianist(input) {
    let n = Number(input.shift());
    let myList = {};
    let myCommands = {
        'Add': add,
        'Remove': remove,
        'ChangeKey': changeKey
    };
    for (let i = 0; i < n; i++) {
        let [piece, composer, key] = input.shift().split('|');
        myList[piece] = {
            composer,
            key
        }
    }
    while (input[0] != 'Stop') {
        let tokens = input.shift().split('|');
        let action = myCommands[tokens.shift()];
        action(...tokens);
    }

    let sortedPieces = Object.entries(myList).sort(sortings);

    for (let each of sortedPieces) {
        console.log(`${each[0]} -> Composer: ${each[1].composer}, Key: ${each[1].key}`);
    }

    ////////////////////////////FUNCTIONS////////////////////////////////////////////////////////////////////
    function add(piece, composer, key) {
        if (myList.hasOwnProperty(piece)) {
            console.log(`${piece} is already in the collection!`);
        } else {
            myList[piece] = {
                composer,
                key,
            }
            console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        }

    }

    function remove(piece) {
        if (myList.hasOwnProperty(piece)) {
            console.log(`Successfully removed ${piece}!`);
            delete myList[piece];
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }

    function changeKey(piece, newKey) {
        if (myList.hasOwnProperty(piece)) {
            myList[piece].key = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`);
        } else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }

    function sortings(a, b) {
        let pieceA = a[0];
        let pieceB = b[0];
        let composerA = a[1].composer;
        let composerB = b[1].composer;

        return pieceA.localeCompare(pieceB) || composerA.localeCompare(composerB)

    }
}
//////////////////////END//////////////////////////////////////////
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);