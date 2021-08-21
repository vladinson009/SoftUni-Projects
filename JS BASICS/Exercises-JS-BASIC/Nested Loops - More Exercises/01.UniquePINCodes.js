function uniqueBarcode(input) {
    let firstMax = Number(input[0]);
    let secondMax = Number(input[1]);
    let thirdMax = Number(input[2]);
    for (let first = 1; first <= firstMax; ++first) {
        for (let second = 2; second <= secondMax; second++) {
            let isPrime = true;
            for (let i = 2; i < second; i++) {
                if (second % i === 0) {
                    isPrime = false;
                }
            }
            for (let third = 1; third <= thirdMax; third++) {
                if (first % 2 === 0 && isPrime && third % 2 === 0)
                    console.log(`${first} ${second} ${third}`);
            }
        }
    }
}
uniqueBarcode(['3', '5', '5'])