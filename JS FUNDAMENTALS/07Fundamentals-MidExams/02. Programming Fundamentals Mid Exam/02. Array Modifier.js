function arrayModifier(input) {
    let list = input.shift().split(' ').map(Number);

    let command = input.shift();
    while (command !== 'end') {
        command = command.split(' ');
        let currentCommand = command[0];
        let firstIndex = Number(command[1]);
        let secondIndex = Number(command[2]);

        switch (currentCommand) {
            case 'swap':
                let temp = list[firstIndex];
                list[firstIndex] = list[secondIndex];
                list[secondIndex] = temp;
                break;
            case 'multiply':
                let multiply = list[firstIndex] * list[secondIndex];
                list[firstIndex] = multiply;
                break;
            case 'decrease':
                for (let i = 0; i < list.length; i++) {
                    list[i] = list[i] - 1
                }
                break;
        }

        command = input.shift();
    }
    console.log(list.join(', '));

}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]);