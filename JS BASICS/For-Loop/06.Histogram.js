function histogram(input) {

    let count = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    for (let i = 1; i < input.length; i++) {
        if (input[i] < 200) {
            p1++;
        } else if (input[i] >= 200 && 400 > input[i]) {
            p2++;
        } else if (input[i] >= 400 && 600 > input[i]) {
            p3++;
        } else if (input[i] >= 600 && 800 > input[i]) {
            p4++;
        } else if (input[i] >= 800) {
            p5++;
        }
    }
    p1 = p1 / count * 100
    p2 = p2 / count * 100
    p3 = p3 / count * 100
    p4 = p4 / count * 100
    p5 = p5 / count * 100
    console.log(`${p1.toFixed(2)}%`)
    console.log(`${p2.toFixed(2)}%`)
    console.log(`${p3.toFixed(2)}%`)
    console.log(`${p4.toFixed(2)}%`)
    console.log(`${p5.toFixed(2)}%`)
}
histogram(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"])