function shoppingList(input) {
    let list = input.shift().split('!');
    let command = input.shift();

    while (command !== 'Go Shopping!') {
        let tokens = command.split(' ');
        let currentCase = tokens.shift();

        switch (currentCase) {
            case 'Urgent':
                if (list.includes(tokens[0]) == false) {
                    list.unshift(tokens[0]);
                }
                break;
            case 'Unnecessary':
                if (list.includes(tokens[0])) {
                    let idx = list.indexOf(tokens[0]);
                    list.splice(idx, 1);
                }
                break;
            case 'Correct':
                if (list.includes(tokens[0])) {
                    let idx = list.indexOf(tokens[0]);
                    list[idx] = tokens[1];
                }
                break;
            case 'Rearrange':
                if (list.includes(tokens[0])) {
                    let idx = list.indexOf(tokens[0]);
                    let rearranged = list.splice(idx, 1);
                    list.push(rearranged);
                }
                break;
        }

        command = input.shift();
    }
    console.log(list.join(', '));
}
shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Wine",
    "Go Shopping!"
]);