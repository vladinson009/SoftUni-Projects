function oddAndEvenSum(singleNumber) {


    function odd(one) {
        let sumOfOdd = 0
        let numberAsString = String(one);

        for (let char of numberAsString) {
            let charNumber = Number(char);
            if (charNumber % 2 !== 0) {
                sumOfOdd += charNumber;
            }
        }
        return sumOfOdd;
    }

    function even(one) {
        let sumOfEven = 0
        let numberAsString = String(one);

        for (let char of numberAsString) {
            let charNumber = Number(char);
            if (charNumber % 2 === 0) {
                sumOfEven += charNumber;
            }
        }
        return sumOfEven;

    }
    let oddSum = odd(singleNumber);
    let evenSum = even(singleNumber);

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435)