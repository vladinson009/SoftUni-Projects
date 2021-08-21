function divide(input) {
    let n = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    for (let i = 1; i <= n; i++) {
        let nums = Number(input[i])
        if (nums % 2 === 0) {
            p1++;
        }
        if (nums % 3 === 0) {
            p2++;
        }
        if (nums % 4 === 0) {
            p3++;
        }
    }
    let dev2 = p1 / n * 100
    let dev3 = p2 / n * 100
    let dev4 = p3 / n * 100
    console.log(`${dev2.toFixed(2)}%`);
    console.log(`${dev3.toFixed(2)}%`);
    console.log(`${dev4.toFixed(2)}%`);
}
divide(["10", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"])