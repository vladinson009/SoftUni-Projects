function reverseString(theString) {
    let splitted = theString.split('');
    let reversed = splitted.reverse();
    let joined = reversed.join('')

    let oneCommand = ((theString.split('')).reverse()).join('');

    console.log(joined);

}
reverseString('SoftUni')