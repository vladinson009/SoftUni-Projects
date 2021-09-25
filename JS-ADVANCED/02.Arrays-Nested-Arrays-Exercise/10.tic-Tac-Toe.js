function ticTacToe(input) {
    const dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let playerMark = 'X';
    for (let i = 0; i < input.length; i++) {
        const [first, second] = input[i].split(' ').map(Number);
        if (isTakenPosition(first, second)) {
            dashboard[first][second] = playerMark;
            playerMark == 'X' ? playerMark = 'O' : playerMark = 'X';
        }
        if (!isFreeSpaceOn() || isWin()) {
            break;
        }
    }
    for (let rows of dashboard) {
        console.log(rows.join('\t'));
    }

    function isTakenPosition(x, y) {
        if (dashboard[x][y] != false) {
            console.log('This place is already taken. Please choose another!');
            return false;
        } else {
            return true
        };
    }

    function isFreeSpaceOn() {
        for (let i = 0; i < dashboard.length; i++) {
            for (let j = 0; j < dashboard[i].length; j++) {
                if (dashboard[i][j] == false) {
                    return true;
                }
            }
        }
        // no free spaces
        console.log('The game ended! Nobody wins :(');
        return false;
    }

    function isWin() {
        let result = [];
        let firstDiagonal = '';
        let secondDiagonal = '';
        for (let i = 0; i < dashboard.length; i++) {
            let vertical = '';
            let horizontal = '';
            firstDiagonal += dashboard[i][i];
            secondDiagonal += dashboard[i][dashboard.length - 1 - i];
            for (let j = 0; j < dashboard.length; j++) {
                vertical += dashboard[j][i];
                horizontal += dashboard[i][j];
            }
            result.push(vertical, horizontal);
        }
        result.push(firstDiagonal, secondDiagonal);
        for (let ticTac of result) {
            if (ticTac == 'XXX') {
                console.log('Player X wins!');
                return true;
            } else if (ticTac == 'OOO') {
                console.log('Player O wins!');
                return true;
            }
        }
        return false;
    }
}
ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"
]);