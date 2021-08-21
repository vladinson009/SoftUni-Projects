function operation(input) {
    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let operator = input[2];
    let result = 0;
    let oddEven = '';
    switch (operator) {
        case '+':
            result = N1 + N2;
            break;
        case '-':
            result = N1 - N2;
            break;
        case '*':
            result = N1 * N2;
            break;  
        case '/':
            result = N1 / N2;
            break;
        case '%':
            result = N1 % N2;
            break;
    }
    if (N2 === 0) {
        console.log(`Cannot divide ${N1} by zero`);
    } else {
        switch (operator) {
            case '+':
            case '-':
            case '*':
                if (result % 2 === 0) {
                    oddEven = 'even';
                } else {
                    oddEven = 'odd'
                }
                console.log(`${N1} ${operator} ${N2} = ${result} - ${oddEven}`);
                break;
            case '/':
                console.log(`${N1} / ${N2} = ${result.toFixed(2)}`);
                break;
            case '%':
                console.log(`${N1} % ${N2} = ${result}`)
        }
    }
}
operation(["10", "12", "+"])
operation(["10", "1", "-"])
operation(["7", "3", "*"])
operation(["123", "12", "/"])
operation(["10", "3", "%"])
operation(["112", "0", "/"])