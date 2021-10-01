function solve(input) {
    let numbers = [];
    let notEnoughtOperands = false;
    for (let each of input) {
        if (typeof each == 'number') {
            numbers.push(each);
        } else {
            operators(each, numbers);
        }
    }
    if (!notEnoughtOperands) {
        if (numbers.length == 1) {
            console.log(numbers[0]);
        } else if (numbers.length > 1) {
            console.log('Error: too many operands!');
        }
    }

    function operators(operator, numbers) {
        if (isEnoughNumbersIn(numbers)) {
            let first = Number(numbers.splice(numbers.length - 2, 1));
            let second = Number(numbers.splice(numbers.length - 1, 1));

            if (operator == '+') {
                numbers.push(first + second);
            } else if (operator == '-') {
                numbers.push(first - second);
            } else if (operator == '*') {
                numbers.push(first * second);
            } else if (operator == '/') {
                numbers.push(first / second);
            }
        } else {
            console.log('Error: not enough operands!');
            notEnoughtOperands = true;
        }
    }

    function isEnoughNumbersIn(numbers) {
        if (numbers.length > 1) {
            return true
        } else {
            return false
        };
    }
}
solve([7,
    33,
    8,
    '-'
]);