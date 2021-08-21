function sumNumbers(input) {
    let index = 0;
    let n = Number(input[index++]);
    let currentNumber = Number(input[index++]);
    let result = 0;

    while ( result < n) {
        result += currentNumber;
        currentNumber = Number(input[index++]);
    }
    console.log(result);
}
    
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])