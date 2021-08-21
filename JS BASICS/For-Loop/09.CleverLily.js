function cleverLily(input) {
    let ageOfLily = Number(input[0]);
    let priceOfWashingMachine = Number(input[1]);
    let pricePerToy = Number(input[2]);

    let sumOfMoney = 0;
    let toyAmount = 0;
    let currentMoney = 10;
    for (let i = 1; i <= ageOfLily; i++) {
        if (i % 2 === 0) {
            sumOfMoney += currentMoney;
            sumOfMoney -= 1;
            currentMoney += 10
        } else {
            toyAmount++
        }
    }
    let totalSum = sumOfMoney + (toyAmount * pricePerToy)

    if (totalSum >= priceOfWashingMachine) {
        console.log(`Yes! ${(totalSum - priceOfWashingMachine).toFixed(2)}`);
    } else {
        console.log(`No! ${(priceOfWashingMachine - totalSum).toFixed(2)}`);
    }
}
cleverLily(["10", "170", "6"]);
cleverLily(["21", "1570.98", "3"])