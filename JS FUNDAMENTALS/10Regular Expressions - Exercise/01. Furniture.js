function furniture(input) {

    let regex = />>(?<name>[a-zA-Z]+)<<(?<price>\d+(?:\.\d+)?)!(?<quantity>\d+)/;
    let furniture = [];
    let totalPrice = 0;
    while (input[0] != 'Purchase') {
        let text = input.shift();
        let match = regex.exec(text);
        if (match != null) {

            let {
                name,
                price,
                quantity
            } = match.groups;

            price = Number(price);
            quantity = Number(quantity);
            totalPrice += price * quantity;
            furniture.push(name);
        }

    }

    console.log('Bought furniture:');
    for (let key of furniture) {
        console.log(key);
    }
    console.log(`Total money spend: ${totalPrice.toFixed(2)}`);

}

furniture([">>Sofa<<312.23!3",
    ">>TV<<300!5",
    ">Invalid<<!5",
    "Purchase"
]);