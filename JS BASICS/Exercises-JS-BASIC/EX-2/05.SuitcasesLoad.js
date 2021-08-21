function suitCasesLoad(input) {

    let trunkCapacity = Number(input[0]);
    let luggageAmount = 0

    for (let i = 1; i < input.length; i++) {
        let luggage = input[i]
        if (luggage === 'End') {
            console.log('Congratulations! All suitcases are loaded!');
            break;
        }
        if (i % 3 === 0) {
            luggage = Number(luggage) + Number(luggage * 0.1)
        }
        if (trunkCapacity < luggage) {
            console.log('No more space!');
            break;
        }
        luggageAmount++
        trunkCapacity = trunkCapacity - Number(luggage);

    }
    console.log(`Statistic: ${luggageAmount} suitcases loaded.`)
}


suitCasesLoad(["550", "100", "252", "72", "End"])
// suitCasesLoad(["700.5", "180", "340.6", "126", "220"])
// suitCasesLoad(["1200.2", "260", "380.5", "125.6", "305", "End"])