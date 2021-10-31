function argumentInfo(arg1, arg2, arg3) {
    const map = new Map();
    for (let each of arguments) {
        if (!map.has(typeof each)) {
            map.set(typeof each, 0);
        }
        map.set(typeof each, map.get(typeof each) + 1);
        console.log(`${typeof each}: ${each}`);
    }

    [...map.entries()].sort((a, b) => b[1] - a[1])
        .forEach(el => console.log(`${el[0]} = ${el[1]}`));
}
argumentInfo('cat', 42, function () {
    console.log('Hello world!');
})