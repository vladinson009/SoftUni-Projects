function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index++];
    let primeNum = 0;
    let nonPrimeNum = 0;
    while (command !== 'stop') {
        let currentNumber = Number(command);
        if (currentNumber < 0) {
            console.log('Number is negative.');
        } else {
            let isPrime = true;
            for (let i = 2; i < currentNumber; i++) {
                if (currentNumber % i === 0) {
                    isPrime = false;
                    break
                }
            }
            if (isPrime) {
                primeNum += currentNumber;
            } else {
                nonPrimeNum += currentNumber;
            }
        }
        command = input[index++];
    }
    console.log(`Sum of all prime numbers is: ${primeNum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNum}`);
}
sumPrimeNonPrime(["3",
    "9",
    "0",
    "7",
    "19",
    "4",
    "stop"
])