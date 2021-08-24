function reverseAnArrayOfNumbers(n, array) {
    let newArrawy = [];
    for (let i = 0; i < n; i++) {
        newArrawy[i] = array[i];

    }

    for (let j = 0; j < newArrawy.length / 2; j++) {
        let temp = newArrawy[(newArrawy.length - 1) - j];
        newArrawy[(newArrawy.length - 1) - j] = newArrawy[j]
        newArrawy[j] = temp
    }
    console.log(newArrawy.join(' '));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])