function chessBoard(n) {
    let printLine = '<div class="chessboard">\n';
    let color = '';
    for (let i = 1; i <= n; i++) {
        printLine += '  <div>\n';
        for (let j = 1; j <= n; j++) {
            if (i % 2 === 0 && j % 2 === 0 || i % 2 !== 0 && j % 2 !== 0) {
                color = 'black'
            } else color = 'white'
            printLine += `    <span class="${color}"></span>\n`
        }
        printLine += '  </div>\n'
    }

    printLine += '</div>'
    console.log(printLine);
}
chessBoard(4)