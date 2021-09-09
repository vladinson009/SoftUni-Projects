function passwordReset(input) {

    let password = input.shift();

    while (input[0] != 'Done') {
        let tokens = input.shift().split(' ');
        let command = tokens.shift();


        if (command == 'TakeOdd') {
            let currentPass = '';
            for (let i = 1; i < password.length; i += 2) {
                currentPass += password[i];
            }
            password = currentPass;
            console.log(password);
        } else if (command == 'Cut') {
            let idx = Number(tokens[0]);
            let lng = Number(tokens[1]);
            let left = password.substring(0, idx);
            let right = password.substring(idx + lng);
            password = left + right;
            console.log(password);

        } else if (command == 'Substitute') {
            let subs = tokens[0];
            let replacement = tokens[1];
            if (password.includes(subs)) {
                password = password.split(subs).join(replacement);
                console.log(password);
            } else {
                console.log('Nothing to replace!');
            }

        }
    }
    console.log(`Your password is: ${password}`);

}
passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"
])