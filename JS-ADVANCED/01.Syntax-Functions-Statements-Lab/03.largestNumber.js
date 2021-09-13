function largestNumber(first, second, third) {
    let result;
    if (first > second && first > third) {
        result = first;
    } else if (second > first && second > third) {
        result = second;
    } else {
        result = third;
    }
    return `The largest number is ${result}.`
}
console.log(largestNumber(51, -3, 16));