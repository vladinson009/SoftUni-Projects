function factorial(input) {

    let num = Number(input[0]);
    let result = 1;
    for (i = 1; i <= num; i++) {
        result = result * i;
    }
    console.log(result);
}
factorial(["8"])