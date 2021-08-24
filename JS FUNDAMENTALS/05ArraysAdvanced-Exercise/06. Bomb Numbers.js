function bombNumber(sequenceOfN, SpecialBombN) {
    let bombNumber = SpecialBombN[0];
    let bombRadius = SpecialBombN[1];
    let result = 0

    while (sequenceOfN.includes(bombNumber)) {
        let idxOfBomb = sequenceOfN.indexOf(bombNumber);
        let bombStart = idxOfBomb - bombRadius;
        let bombPower = 2 * bombRadius + 1
        if (bombStart < 0) {
            bombStart = 0;
        }
        sequenceOfN.splice(bombStart, bombPower)
    }

    for (let j = 0; j < sequenceOfN.length; j++) {
        result += sequenceOfN[j]
    }

    console.log(result);
}
bombNumber([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2])