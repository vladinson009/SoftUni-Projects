function easternDecorations(input) {
    let index = 0;
    let numOfCustumers = Number(input[index++]);
    let command = input[index++];

    let pricePerCustomer = 0;
    let numberOfPurchases = 0;
    let totalSpend = 0;
    for (let i = 1; i <= numOfCustumers; i++) {
        while (command !== 'Finish') {
            numberOfPurchases++;
            switch (command) {
                case 'basket':
                    pricePerCustomer += 1.5;
                    break;
                case 'wreath':
                    pricePerCustomer += 3.8;
                    break;
                case 'chocolate bunny':
                    pricePerCustomer += 7;
                    break;
            }
            command = input[index++];
        }
        if (numberOfPurchases % 2 === 0) {
            pricePerCustomer *= 0.8;
        }
        console.log(`You purchased ${numberOfPurchases} items for ${pricePerCustomer.toFixed(2)} leva.`);
        totalSpend += pricePerCustomer;
        pricePerCustomer = 0;
        numberOfPurchases = 0;
        command = input[index++];
    }
    console.log(`Average bill per client is: ${(totalSpend / numOfCustumers).toFixed(2)} leva.`);
}

easternDecorations(["1",
"basket",
"wreath",
"chocolate bunny",
"wreath",
"basket",
"chocolate bunny",
"Finish"])