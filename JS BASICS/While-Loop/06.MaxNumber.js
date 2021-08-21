function maxNumber(input) {
    let index = 0;
    let currentNum = input[index++];
    let maxNum = Number.MIN_SAFE_INTEGER;

    while (currentNum !== 'Stop') {
        let num = Number(currentNum);
        if (num > maxNum) {
            maxNum = num;
        }
        currentNum = input[index++];
    }
    console.log(maxNum);
}
maxNumber(["-10", "20", "-30", "Stop"])