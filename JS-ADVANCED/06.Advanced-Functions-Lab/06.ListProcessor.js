function listProcessor(list) {
    const collection = []
    const actions = {
        add,
        remove,
        print
    }

    for (let command of list) {
        const [action, text] = command.split(' ');
        const func = actions[action];
        func(text);
    }

    function add(string) {
        collection.push(string)
    };

    function remove(string) {
        let index = collection.indexOf(string);
        while (index != -1) {
            collection.splice(index, 1);
            index = collection.indexOf(string);
        }
    };

    function print() {
        console.log(collection.join(','));
    };
}

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);