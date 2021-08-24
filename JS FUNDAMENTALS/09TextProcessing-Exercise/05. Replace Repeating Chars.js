function replaceRepeating(input) {

    let result = '';

    for (let i = 0; i < input.length; i++) {
        if (input[i + 1] != input[i]) {
            result += input[i];
        }
    }
    console.log(result);
}
replaceRepeating('aaaaabbbbbcdddeeeedssaa');