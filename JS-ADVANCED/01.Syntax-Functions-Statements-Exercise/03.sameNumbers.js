function sameNumbers(input) {

    let numAsStr = input.toString();
    let first = numAsStr[0];
    let isSame = true;
    let sum = 0;

    for (let i = 0; i < numAsStr.length; i++) {
        if (numAsStr[i] !== first) {
            isSame = false;
        }
        sum += Number(numAsStr[i]);

    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);

///////////////////////////////////////////////////////////////////////////////////////

function same(input) {

    const string = String(input);
    let isSame = true;
    let sum = 0;

    for (let i = 0; i < string.length; i++) {
        const currentNumber = Number(string[i])
        const nextNumber = Number(string[i + 1])
        if (currentNumber != nextNumber && !isNaN(nextNumber)) {
            isSame = false;
        }
        sum += currentNumber;
    }

    console.log(isSame);
    console.log(sum);
}
same(2222222)