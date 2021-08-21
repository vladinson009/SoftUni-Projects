function evenPower(input) {

    let N = Number(input[0]);

    for (let i = 0; i <= N; i += 2) {
        console.log(Math.pow(2, i))
    }
}
evenPower(['6'])