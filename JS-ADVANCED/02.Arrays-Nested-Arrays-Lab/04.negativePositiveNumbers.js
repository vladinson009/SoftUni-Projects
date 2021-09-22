function negativePositive(input) {
    let result = [];
    for (let each of input) {
        if (each < 0) {
            result.unshift(each);
        } else {
            result.push(each);
        }
    }
    console.log(result.join('\n'));
}
negativePositive([7, -2, 8, 9]);