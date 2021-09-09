function worldTour(input) {

    let myTrip = input.shift();
    let myCommands = {
        'Add Stop': add,
        'Remove Stop': remove,
        'Switch': swap
    }
    while (input[0] != 'Travel') {
        let tokens = input.shift().split(':');
        let command = tokens.shift();
        let action = myCommands[command];
        action(tokens[0], tokens[1])
        console.log(myTrip);
    }
    console.log(`Ready for world tour! Planned stops: ${myTrip}`);


    function add(index, string) {
        index = Number(index);
        if (index >= 0 && index < myTrip.length) {
            let left = myTrip.substring(0, index);
            let right = myTrip.substring(index)
            return myTrip = left + string + right;
        }

    }

    function remove(startIndex, endIndex) {
        startIndex = Number(startIndex);
        endIndex = Number(endIndex);
        if ((startIndex >= 0 && startIndex < myTrip.length) && (endIndex >= 0 && endIndex < myTrip.length)) {
            let left = myTrip.substring(0, startIndex);
            let right = myTrip.substring(endIndex + 1)
            return myTrip = left + right;
        }
    }

    function swap(oldStr, newStr) {
        if (myTrip.includes(oldStr)) {
            return myTrip = myTrip.split(oldStr).join(newStr);
        }

    }
};
worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
]);