function storage(input) {
    let myStorages = {};

    for (let element of input) {
        let tokens = element.split(' ');
        let name = tokens[0];
        let quantity = Number(tokens[1]);

        if (myStorages.hasOwnProperty(name)) {
            myStorages[name] += quantity;
        } else
            myStorages[name] = quantity;
    }
    for (let keys in myStorages) {
        console.log(`${keys} -> ${myStorages[keys]}`);

    }
}
////////////////////////////////////////////////////////////////
function storageMap(input) {
    let myStorages = new Map();
    for (let element of input) {
        let tokens = element.split(' ');
        let name = tokens[0];
        let quantity = Number(tokens[1]);
        if (myStorages.has(name)) {
            let currentQuantity = myStorages.get(name);
            let newQuantity = currentQuantity + quantity;
            myStorages.set(name, newQuantity);
        } else {
            myStorages.set(name, quantity);
        }
    }
    for (let keys of myStorages) {
        console.log(`${keys[0]} -> ${keys[1]}`);

    }
}
storageMap(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
])