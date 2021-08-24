function shootForTheWin(input) {
    let list = input.shift().split(' ').map(Number);
    let command = input.shift();
    let shots = 0;

    while (command !== 'End') {
        command = Number(command);
        let current = list[command];
        if (command >= 0 && command < list.length) {
            list[command] = -1;
            shots++
        }
        for (let i = 0; i <= list.length; i++) {
            if ((current < list[i]) && (list[i] !== -1)) {
                list[i] -= current;
            } else if ((current >= list[i]) && (list[i] !== -1)) {
                list[i] += current;
            }
        }
        command = input.shift();
    }
    let printLine = list.join(' ')
    console.log(`Shot targets: ${shots} -> ${printLine}`);
}
shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"
]);