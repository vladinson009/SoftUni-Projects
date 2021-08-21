function change(input) {

    let bitCoin = Number(input[0]);
    let CNY = Number(input[1]);
    let commission = Number(input[2]);

    let oneBitCoin = Number('1168');
    let oneDollar = Number('1.76');
    let oneEuro = Number('1.95');
    let oneCNY = 0.15 * oneDollar;

    let sum = bitCoin * oneBitCoin + CNY * oneCNY;
    let result = sum / oneEuro
    let afterComision = result - (result * (commission / 100))

    console.log(afterComision.toFixed(2));
}

change(["1", "5", "5"]);
change(["20", "5678", "2.4"])
change(["7", "50200.12", "3"])