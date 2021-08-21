function greetings(input) {
    let name = input[0];
    let surname = input[1];
    let age = input[2];

    console.log(`Hello, ${name} ${surname}! You are ${age} years old!`);

}
greetings(['Vladimir', 'Gulev', 25])