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