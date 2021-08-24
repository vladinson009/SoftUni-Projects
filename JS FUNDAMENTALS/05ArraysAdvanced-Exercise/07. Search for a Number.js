function searchFor(list, commands) {

    let numToTake = Number(commands[0]);
    let numToDelete = Number(commands[1]);
    let numToSearch = Number(commands[2]);
    let newArr = [];
    let count = 0;
    for (let i = 0; i < numToTake; i++) {
        newArr.push(list[i]);
    }
    for (let i = 0; i < numToDelete; i++) {
        newArr.shift();
    }
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === numToSearch) {
            count++
        }
    }
    console.log(`Number ${numToSearch} occurs ${count} times.`);
}
searchFor([5, 2, 3, 4, 1, 6],
    [5, 2, 3])