function addressBook(input) {
    let addresses = {};

    for (let el of input) {
        let [name, address] = el.split(':');

        addresses[name] = address;
    }
    let sorted = Object.keys(addresses).sort((a, b) => a.localeCompare(b));

    for (let keys of sorted) {
        console.log(`${keys} -> ${addresses[keys]}`);
    }
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);