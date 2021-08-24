function movingTarget(input) {
    let list = input.shift().split(' ').map(Number)

    let command = input.shift();

    while (command !== 'End') {
        let tokens = command.split(' ');
        let currentCommand = tokens.shift();
        let index = Number(tokens.shift());
        let value = Number(tokens.shift());

        switch (currentCommand) {
            case 'Shoot':
                if (list[index]) {
                    list[index] -= value;
                    if (list[index] <= 0) {
                        list.splice(index, 1);
                    }
                }
                break;
            case 'Add':
                if (list[index]) {

                    list.splice(index, 0, value);
                } else {
                    console.log('Invalid placement!');
                }
                break;
            case 'Strike':
                if (list[index]) {
                    let strike = value * 2 + 1
                    if (list[index - value] && list[index + value]) {
                        list.splice(index - value, strike)
                        //1 2 3 4 5
                    } else {
                        console.log('Strike missed!');
                    }
                }
                break;
        }
        command = input.shift();
    }
    console.log(list.join('|'));
}
movingTarget(["120 100 80 60 40",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"
]);