function moving(input) {
    let index = 0;
    let w = Number(input[index++]);
    let l = Number(input[index++]);
    let h = Number(input[index++]);

    let totalRoom = w * l * h;
    let boxesAmount = input[index++];

    let neededRoom = 0;

    while (boxesAmount !== 'Done') {
        let currentBox = Number(boxesAmount);
        neededRoom += currentBox;
        if (neededRoom > totalRoom) {
            console.log(`No more free space! You need ${neededRoom - totalRoom} Cubic meters more.`);
            break;
        }
        boxesAmount = input[index++];
    }
    if (neededRoom <= totalRoom) {
        console.log(`${totalRoom - neededRoom} Cubic meters left.`)
    }
}
moving(["10",
"1",
"2",
"4",
"6",
"Done"])