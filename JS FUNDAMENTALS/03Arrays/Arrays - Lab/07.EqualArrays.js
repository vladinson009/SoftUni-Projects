function equalArrays(string1, string2) {
    let sum = 0;
    for (let i = 0; i < string1.length; i++) {
        if (string1[i] === string2[i]) {
            sum += Number(string1[i]);
        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
    }
    console.log(`Arrays are identical. Sum: ${sum}`);
}
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5'])