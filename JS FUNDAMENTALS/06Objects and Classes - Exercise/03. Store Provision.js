function storeProvision(firstStock, secondStock) {
    let store = [];

    for (let i = 0; i < firstStock.length - 1; i += 2) {
        let product = firstStock[i];
        let amount = Number(firstStock[i + 1]);

        let currentObj = {
            product: product,
            amount: amount
        }
        store.push(currentObj);
    }
    for (let i = 0; i < secondStock.length - 1; i += 2) {
        let product = secondStock[i];
        let amount = Number(secondStock[i + 1]);

        let currentObj = {
            product: product,
            amount: amount
        }
        let idxProduct = store.findIndex(x => x.product === product)
        if (idxProduct < 0) {
            store.push(currentObj);
        } else {
            store[idxProduct].amount += amount;
        }

    }
    for (let stock of store) {
        console.log(`${stock.product} -> ${stock.amount}`);
    }
}

storeProvision([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])