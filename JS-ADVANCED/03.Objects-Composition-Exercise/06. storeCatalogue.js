function storeCatalogue(input) {
    const catalogue = {};

    for (let el of input) {
        let [product, price] = el.split(' : ');
        price = Number(price);
        let letter = product[0];

        if (catalogue[letter] == undefined) {
            catalogue[letter] = {};
        }
        catalogue[letter][product] = price;
    }
    const initials = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));

    for (const initial of initials) {
        const sorted = Object.keys(catalogue[initial]).sort((a, b) => a.localeCompare(b));
        console.log(initial);
        for (const el of sorted) {
            console.log(`  ${el}: ${catalogue[initial][el]}`);
        }
    }

}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);