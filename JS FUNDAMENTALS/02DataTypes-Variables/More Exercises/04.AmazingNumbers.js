function amazingNumber(number) {
    let numAsString = number.toString();
    let sum = 0
    let isAmazing = false;
    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);
    }
    let sumAsString = sum.toString() //.includes('9');
    for (let j = 0; j < sumAsString.length; j++) {
        if (sumAsString[j] == 9) {
            isAmazing = true;
        }
    }
    console.log(`${number} Amazing? ${isAmazing ? 'True' :'False'}`);
}
amazingNumber(1233)