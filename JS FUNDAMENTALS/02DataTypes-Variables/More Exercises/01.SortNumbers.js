function sortNumbers(num1, num2, num3) {
    let numbers = [num1, num2, num3];
    let sorted = ((numbers.sort()).reverse())

    for (let i = 0; i < sorted.length; i++) {
        console.log(sorted[i]);
    }

}
sortNumbers(2, 1, 3)