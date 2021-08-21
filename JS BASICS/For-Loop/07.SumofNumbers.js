function sumOfNumbers(input) {

    let number = (input[0]);
    let sum = 0



    for (let i = 0; i <= number.length - 1; i++) {
        let num = Number(number[i]);



        sum += num


        
    }
    console.log(`The sum of the digits is:${sum}`)
}
sumOfNumbers(['1234'])