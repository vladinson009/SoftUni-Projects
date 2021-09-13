function circleArea(input) {
    let result;

    if (typeof input == 'number') {
        result = input ** 2 * Math.PI;
        return result.toFixed(2);
    } else {
        return `We can not calculate the circle area, because we receive a ${typeof input}.`
    }

}
console.log(circleArea(5));
console.log(circleArea('name'));