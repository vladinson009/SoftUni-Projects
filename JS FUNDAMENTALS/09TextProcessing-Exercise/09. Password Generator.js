function passwordGenerator(input) {

    let tempPassword = (input[0] + input[1]).split('');
    let thirdString = input[2].split('');
    let counter = 0;
    for (let i = 0; i < tempPassword.length; i++) {

        if (isVowel(tempPassword[i])) {
            if (counter == thirdString.length) {
                counter = 0;
            }
            tempPassword[i] = thirdString[counter++].toLocaleUpperCase();
        }

    }
    let newPassword = tempPassword.reverse().join('');

    console.log(`Your generated password is ${newPassword}`);


    function isVowel(char) {
        if (char.length == 1) {
            return /[aeiou]/.test(char);
        }
    }
}
passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
]);