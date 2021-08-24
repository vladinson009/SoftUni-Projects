function shoppingList(input) {
    let list = input.shift().split('|');

    let action = input.shift();

    while (action != 'Shop!') {

        let tokens = action.split('%');
        let command = tokens[0];
        let product = tokens[1];

        switch (command) {

            case 'Important':
                if (list.includes(product)) {
                    let idx = list.indexOf(product);
                    let moved = list.splice(idx, 1);
                    moved = moved.toString()
                    list.unshift(moved);
                } else {
                    list.unshift(product);

                }
                break;
            case 'Add':
                if (!list.includes(product)) {
                    list.push(product);
                } else {
                    console.log(`The product is already in the list.`);
                }
                break;
            case 'Swap':
                let secondProduct = tokens[2];

                if (list.includes(product) && list.includes(secondProduct)) {
                    let firstIdx = list.indexOf(product);
                    let secondIdx = list.indexOf(secondProduct);
                    // let theFirst
                    list[firstIdx] = [list[secondIdx], list[secondIdx] = list[firstIdx]][0];

                } else {
                    if (!list.includes(product)) {
                        console.log(`Product ${product} missing!`);
                    } else if (!list.includes(secondProduct)) {
                        console.log(`Product ${secondProduct} missing!`);
                    }
                }

                break;
            case 'Remove':
                if (list.includes(product)) {
                    let idx = list.indexOf(product);
                    list.splice(idx, 1);
                } else {
                    console.log(`Product ${product} isn't in the list.`);
                }
                break;
            case 'Reversed':
                list.reverse()
                break;

        }

        action = input.shift();
    }
    for (let i = 0; i < list.length; i++) {
        console.log(`${i+1}. ${list[i]}`);
    }

}

shoppingList(["apple|cheese|salt|bananas",
    "Remove%cheese",
    "Swap%salt%bananas",
    "Shop!"
])