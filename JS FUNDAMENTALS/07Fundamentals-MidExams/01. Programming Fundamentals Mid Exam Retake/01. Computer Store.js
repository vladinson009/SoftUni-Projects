function computerStore(input) {
    let command = input.shift();
    let sum = 0;
    let taxes = 0
    while (command !== 'special' && command !== 'regular') {
        command = Number(command);
        if (command < 0) {
            console.log('Invalid price!');
        } else {
            sum += command;
            taxes = taxes + (command * 0.2)

        }
        command = input.shift();

    }
    let totalPrice = sum + taxes;
    if (command === 'special') {
        totalPrice *= 0.9;
    }
    if (totalPrice <= 0) {
        console.log('Invalid order!');
    } else {
        console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${sum.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${totalPrice.toFixed(2)}$`);
    }
}
computerStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
]);