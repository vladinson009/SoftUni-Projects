function aggergate(array) {
    array = array.map(Number);

    let sum = array.reduce((atCurrentIndex, arrayEl) => atCurrentIndex + arrayEl, 0);
    let inverseSum = array.reduce((a, b) => a + 1 / b, 0);
    let concat = array.join('')

    console.log(sum);
    console.log(inverseSum);
    console.log(concat);

}

aggergate([1, 2, 3])