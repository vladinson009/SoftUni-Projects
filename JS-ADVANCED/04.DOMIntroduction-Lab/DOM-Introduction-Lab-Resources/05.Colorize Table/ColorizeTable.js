function colorize() {
    const table = document.querySelectorAll('table tr:nth-child(even)');
    // console.log(table);
    for (let i = 0; i < table.length; i++) {
        table[i].style = 'background-color: teal';

    }
}