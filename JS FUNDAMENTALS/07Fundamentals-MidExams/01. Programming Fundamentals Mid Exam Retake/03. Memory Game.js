function memoryGame(input) {
    let list = input.shift().split(' ');

    let command = input.shift();
    let moves = 0;
    while (command !== 'end') {
        moves++
        command = command.split(' ').map(Number);
        let first = command[0];
        let second = command[1];
        let middle = list.length / 2;

        if (first == second || first < 0 || second < 0 ||
            first >= list.length || second >= list.length) {

            list.splice(middle, 0, `-${moves}a`, `-${moves}a`);
            console.log('Invalid input! Adding additional elements to the board');
        } else if (list[first] == list[second]) {
            let match = list[first];
            if (first < second) {
                list.splice(second, 1);
                list.splice(first, 1);
            } else {
                list.splice(first, 1);
                list.splice(second, 1);
            }
            console.log(`Congrats! You have found matching elements - ${match}!`);

        } else {
            console.log('Try again!');
        }
        if (list.length == 0) {
            console.log(`You have won in ${moves} turns!`);
            return;
        }
        command = input.shift();
    }
    console.log(`Sorry you lose :(
${list.join(' ')}`);

}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]);