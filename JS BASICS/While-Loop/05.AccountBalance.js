function accountBalance(input) {
    let index = 0;
    let currentTransaction = input[index++];
    let totalBalance = 0;

    while (currentTransaction !== 'NoMoreMoney') {
        let currentAmount = Number(currentTransaction)
        if (currentTransaction < 0) {
            console.log('Invalid operation!');
            break;
        } else {
            console.log(`Increase: ${currentAmount.toFixed(2)}`)
            totalBalance += currentAmount;
            currentTransaction = input[index++];
        }
    }
    console.log(`Total: ${totalBalance.toFixed(2)}`)
}
accountBalance(["120", "45.55", "-150"])