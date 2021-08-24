function distinctArray(input) {
    let theList = [];
    for (let i = 0; i < input.length; i++) {
        if (!theList.includes(input[i])) {
            theList.push(input[i]);
        }
    }
    console.log(theList.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])