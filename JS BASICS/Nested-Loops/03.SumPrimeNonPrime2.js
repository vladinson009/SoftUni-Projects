function sumPrime(input) {
    let index = 0;
    let command = input[index++];
    let prime = 0;
    let nonPrime = 0;
    while (command !== 'stop') {
        let currentNum = Number(command);
        let noPrime = false;
        if (currentNum < 0) {
            console.log('Number is negative.');
        } else {
            for (let i = 2; i < currentNum; i++) {
                if (currentNum % i === 0) {
                    noPrime = true;
                    break;
                }
            }
            if (noPrime) {
                nonPrime += currentNum;
            } else {
                prime += currentNum;
            }
        }
        command = input[index++];
    }
    console.log(`Sum of all prime numbers is: ${prime}`);
    console.log(`Sum of all non prime numbers is: ${nonPrime}`);
}
sumPrime(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"
])