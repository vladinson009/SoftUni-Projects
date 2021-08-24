function solve(input) {
    let msg = input.shift();


    while (input[0] != 'Finish') {
        let [command, ...tokens] = input.shift().split(' ');
        if (command == 'Replace') {
            replace(tokens[0], tokens[1]);
        } else if (command == 'Cut') {
            let start = Number(tokens[0]);
            let end = Number(tokens[1]);
            cut(start, end);
        } else if (command == 'Make') {
            make(tokens[0]);
        } else if (command == 'Check') {
            check(tokens[0]);
        } else if (command == 'Sum') {
            let start = Number(tokens[0]);
            let end = Number(tokens[1]);
            sum(start, end);
        }
    }


    function replace(oldChar, newChar) {
        msg = msg.split(oldChar).join(newChar);
        console.log(msg);
        return msg
    }

    function cut(start, end) {
        if (start <= 0 || end <= 0 || end >= msg.length || start >= msg.length) {
            console.log('Invalid indices!');
        } else {
            let left = msg.substring(0, start);
            let right = msg.substring(end + 1);
            console.log(left + right);
            return msg = left + right;
        }
    }

    function make(upOrLow) {
        if (upOrLow == 'Upper') {
            msg = msg.toUpperCase();
        } else {
            msg = msg.toLowerCase();
        }
        console.log(msg);
    }

    function check(str) {
        if (msg.includes(str)) {
            console.log('Message contains ' + str);
        } else {
            console.log('Message doesn\'t contain ' + str);
        }
    }

    function sum(start, end) {
        if (start <= 0 || end <= 0 || end >= msg.length || start >= msg.length) {
            console.log('Invalid indices!');
        } else {
            let total = 0;
            let piece = msg.substring(start, end + 1);
            for (const el of piece) {
                let n = el.charCodeAt(0);
                total += n;
            }
            console.log(total);
        }
    }
}
solve(["ILikeSoftUni",
    "Replace I We",
    "Make Upper",
    "Check SoftUni",
    "Sum 1 4",
    "Cut 1 4",
    "Finish"
])