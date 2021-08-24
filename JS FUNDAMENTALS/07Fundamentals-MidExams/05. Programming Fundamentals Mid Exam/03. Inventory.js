function inventory(input) {
    let list = input.shift().split(', ');

    let command = input.shift();

    while (command !== 'Craft!') {
        command = command.split(' - ');
        let currentCommand = command[0];
        let item = command[1];
        switch (currentCommand) {
            case 'Collect':
                if (list.includes(item) == false) {
                    list.push(item);
                }
                break;

            case 'Drop':
                if (list.includes(item)) {
                    let idx = list.indexOf(item);
                    list.splice(idx, 1);
                }
                break;
            case 'Combine Items':
                item = item.split(':');
                if (list.includes(item[0])) {
                    let idx = list.indexOf(item[0]);
                    list.splice(idx + 1, 0, item[1]);

                }
                break;
            case 'Renew':
                if (list.includes(item)) {
                    let idx = list.indexOf(item);
                    let renewed = list.splice(idx, 1).join('');
                    list.push(renewed);

                }
                break;
        }




        command = input.shift();
    }
    console.log(list.join(', '));

}
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]);