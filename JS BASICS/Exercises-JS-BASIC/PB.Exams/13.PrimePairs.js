function primePairs(input) {

    let firstTwo = Number(input[0]);
    let secondTwo = Number(input[1]);

    let differenceBetweenFirst = Number(input[2]);
    let differenceBetweenSecond = Number(input[3]);

    for (let first = firstTwo; first <= firstTwo + differenceBetweenFirst; first++) {
        for (let second = secondTwo; second <= secondTwo + differenceBetweenSecond; second++) {
            let prime = true;
            
            for (let x = 2; x < first; x++) {
                if (first % x === 0) {
                    prime = false;
                    break;
                }
                for (let y = 2; y < second; y++) {
                    if (second % y === 0) {
                        prime = false;
                        break;
                    }
                }
            }
            if (prime) {
                console.log('' + first + second);
            }
        }
    }
}
primePairs(['10', '30', '9', '6'])