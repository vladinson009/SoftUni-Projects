function minNumber(input) {
    let index = 0;
    let currentNum = input[index++];
    let minNum = Number.MAX_SAFE_INTEGER;

    while (currentNum !== 'Stop') {
        let num = Number(currentNum);
        if (num < minNum) {
            minNum = num;
        }
        currentNum = input[index++];
    }
    console.log(minNum);
}
minNumber(["45",
"-20",
"7",
"99",
"Stop"])