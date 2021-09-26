function ticTacToe(moves) { // 60/100
    const playerOne = 'X';
    const playerTwo = 'O';

    let turn = playerOne;
    let winner = false;
    let boardFull = false;
    let board = [];
    let cells = 3;
    let numOfTurns = 0;

    // Create NxN board of cells size with initial values false
    for (let row = 0; row < cells; row++) {
        board[row] = new Array(cells).fill(false);
    }

    // Functions to check for winner or full board
    const checkForWinner = {

        cells: () => {
            for (let i = 0; i < cells; i++) {
                let turns = new Set();
                for (let n = 0; n < cells; n++) {
                    turns.add(board[i][n])
                }
                if (turns.size === 1 && turns.has(turn)) {
                    winner = turn;
                }
            }
        },
        diagonals: () => {
            let firstDiagonalTurns = new Set(),
                secondDiagonalTurns = new Set();
            let secondDiagonalPos = cells - 1;

            // Add the diagonal turns so far to unique sets
            for (let i = 0; i < cells; i++) {
                firstDiagonalTurns.add(board[i][i])
                secondDiagonalTurns.add(board[i][secondDiagonalPos]);
                secondDiagonalPos--;
            }

            // If all turns are the same and made by the current player they win
            if ((firstDiagonalTurns.size === 1 && firstDiagonalTurns.has(turn)) ||
                (secondDiagonalTurns.size === 1 && secondDiagonalTurns.has(turn))) {
                winner = turn;
            }
        },
        rows: () => {
            let fullRows = 0;
            for (let i = 0; i < cells; i++) {
                for (let j = 0; j < cells; j++) {

                    let row = board[i][j];
                    if (row.every(symbol => symbol !== false)) {
                        fullRows++;
                        if (row.every(symbol => symbol == turn)) {
                            winner = turn;
                        }
                    }
                }
            }
            if (fullRows === cells) {
                boardFull = true;
            }
        }
    }

    // Perform moves on the board
    for (let n = 0; n < moves.length; n++) {
        const [row, col] = moves[n].split(' ').map(Number);

        // If cell is taken we skip the rest and the player picks another cell
        if (board[row][col] !== false) {
            console.log(`This place is already taken. Please choose another!`);
            continue;
        }

        // Apply turn if it's valid else skip the rest and the player picks another cell
        if (board[row][col] != undefined) {
            board[row][col] = turn;
            numOfTurns++;
        } else {
            continue;
        }

        // Perform checks for winner or full board if the minimum turns for winning are reached
        if (numOfTurns >= 5) {
            for (let check in checkForWinner) {
                checkForWinner[check]();
                if (winner) {
                    break;
                }
                if (boardFull) {
                    break
                }
            }
        }

        if (winner) {
            console.log(`Player ${turn} wins!`);
            break;
        }
        if (boardFull) {
            console.log(`The game ended! Nobody wins :(`);
            break;
        }

        // Switch turn
        if (turn === playerOne) {
            turn = playerTwo
        } else {
            turn = playerOne
        }
    }
    if (!winner && !boardFull) {
        console.log(`The game ended! Nobody wins :(`);

    }
    // Print game board
    for (let row in board) {
        console.log(board[row].join('\t'))
    }
}


ticTacToe([
    '0 1',
    '0 1',
    '0 1',
    '0 1',
    '0 1',
    '1 1',
    '1 2',
    '2 2',
    '2 1',
    '0 1'
])