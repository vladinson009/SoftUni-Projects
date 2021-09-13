function commonDivisor(first, second) {

    while (second != 0) {
        let temp = second;
        second = first % second;
        first = temp;

    }
    return first;

}
console.log(commonDivisor(15, 5));
console.log(commonDivisor(2154, 458));