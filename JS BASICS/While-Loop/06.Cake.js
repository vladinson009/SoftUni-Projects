function cake(input) {
    let index = 0;
    let width = Number(input[index++]);
    let length = Number(input[index++]);
    let theCakeSize = width * length;

    let command = input[index++];
    while (theCakeSize >= 0) {
        if (command === 'STOP') {
            console.log(`${theCakeSize} pieces are left.`);
            break;
        }
        let currentCake = Number(command);
        theCakeSize -= currentCake;
        command = input[index++];
    }
    if (theCakeSize < 0)
        console.log(`No more cake left! You need ${Math.abs(theCakeSize)} pieces more.`);
}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])