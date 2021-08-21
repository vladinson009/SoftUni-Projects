function withStep(input) {

    let N = Number(input[0]);
    for (let i = 1; i <= N; i += 3) {
        console.log(i);
    }
}
withStep(['10'])