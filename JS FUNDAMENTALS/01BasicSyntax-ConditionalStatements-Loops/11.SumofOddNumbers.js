function sumOfOdd(n) {
    let sum = 0;
    let currentNum = 1
    for (let i = 0; i < n; i++) {
        console.log(currentNum);
        sum += currentNum;
        currentNum += 2

    }
    console.log('Sum:', sum)
}
sumOfOdd(5);