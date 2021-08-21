function renovation(input) {
    let index = 0;
    let h = Number(input[index++]);
    let w = Number(input[index++]);
    let exludedPercents = Number(input[index++]);
    let currentLiters = input[index++];

    let totalForPainting = Math.ceil((h * w * 4) - h * w * 4 * (exludedPercents / 100));

    while (currentLiters !== 'Tired!') {
        totalForPainting -= Number(currentLiters);
        if (totalForPainting <= 0) {
            break
        }
        currentLiters = input[index++];
    }

    if (currentLiters === 'Tired!') {
        console.log(`${totalForPainting} quadratic m left.`);
    } else if (totalForPainting == 0) {
        console.log(`All walls are painted! Great job, Pesho!`);
    } else if (totalForPainting < Number(currentLiters)) {
        console.log(`All walls are painted and you have ${Math.abs(totalForPainting)} l paint left!`);
    }
}

renovation(["3", "5", "10", "2", "3", "4", "Tired!"])