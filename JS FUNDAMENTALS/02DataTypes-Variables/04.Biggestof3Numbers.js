function biggestOf3Numbers(num1, num2, num3) {
    let biggestNum = Number.MIN_SAFE_INTEGER;
    if (num1 > biggestNum) {
        biggestNum = num1;
    }
    if (num2 > biggestNum) {
        biggestNum = num2;
    }
    if (num3 > biggestNum) {
        biggestNum = num3;
    }
    console.log(biggestNum);
}
biggestOf3Numbers(-2, 7, 3)