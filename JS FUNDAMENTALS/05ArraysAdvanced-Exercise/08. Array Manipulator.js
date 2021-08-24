function arrayManipulator(list, commands) {
    let theLength = commands.length;
    for (let i = 0; i < theLength; i++) {
        let theCommand = commands[i].split(' ');
        let firstCommand = Number(theCommand[1]);
        let secondCommand = Number(theCommand[2]);
        switch (theCommand[0]) {
            case 'add':
                list.splice(firstCommand, 0, secondCommand);
                break;

            case 'addMany':
                let idx = firstCommand;
                theCommand.splice(0, 2);
                list.splice(idx, 0, ...(theCommand.map(Number)));

                break;
            case 'contains':
                console.log(list.indexOf(Number(firstCommand)));
                break;

            case 'remove':
                list.splice(Number(firstCommand), 1);
                break;

            case 'shift':
                for (let i = 0; i < firstCommand; i++) {
                    list.push(list.shift())
                }
                break;

            case 'sumPairs':
                let newArr = [];
                if (list.length % 2 !== 0) {
                    list.push(0);
                }
                for (let i = 0; i < list.length - 1; i += 2) {
                    let sum = Number(list[i]) + Number(list[i + 1]);
                    newArr.push(sum);
                }
                list = newArr;
                break;

            case 'print':
                console.log(`[ ${list.join(', ')} ]`);
        }
    }

}
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])