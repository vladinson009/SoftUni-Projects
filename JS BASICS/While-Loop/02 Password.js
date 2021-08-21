function password02(input) {
    let index = 0;
    let username = input[index++];
    let password = input[index++];
    let tempPassword = input[index++];

    while (tempPassword !== password) {
        tempPassword = input[index++];
    }
    console.log(`Welcome ${username}!`)
}

password02(["Gosho",
"secret",
"secret"])