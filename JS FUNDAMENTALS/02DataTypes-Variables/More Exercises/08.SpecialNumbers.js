function specialNumber(n) {
    //A number is special when its sum of digits is 5, 7 or 11.

    for (let i = 1; i <= n; i++) {
        let currentString = i.toString();
        let sumOfDig = 0;
        let isSpecial = '';

        for (let j = 0; j < currentString.length; j++) {
            let currentDigit = Number(currentString[j]);
            sumOfDig += currentDigit;
        }
        if (sumOfDig === 5 || sumOfDig === 7 || sumOfDig === 11) {
            isSpecial = 'True';
        } else {
            isSpecial = 'False';
        }
        console.log(`${i} -> ${isSpecial}`);
    }
}
specialNumber(15)