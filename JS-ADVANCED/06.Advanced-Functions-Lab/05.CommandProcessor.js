function solve() {
    let text = '';

    function append(n) {
        text += n;
    };

    function removeStart(n) {
        text = text.slice(n);
    };

    function removeEnd(n) {
        text = text.slice(0, -n);
    };

    function print() {
        console.log(text);
    };
    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}

let firstZeroTest = solve();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();