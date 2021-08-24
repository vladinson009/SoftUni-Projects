function printAndSum(firstNum, secondNum) {
    let printLine = '';
    let totalSum = 0;
    for(let i = firstNum; i <= secondNum;i++) {
printLine +=i+' ';
totalSum += i;
    }
console.log(printLine);
console.log('Sum:', totalSum);
}
printAndSum(0, 26)