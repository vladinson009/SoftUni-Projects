function club(input) {
    let index = 0;
    let wantedProfit = Number(input[index]);
    index++;
    let coctailName = input[index];
    index++;
    let coctailAmount = input[index];
    index++;
    let coctailPrice = 0;
    let totalPrice = 0;

    while (coctailName !== 'Party!') {
        coctailPrice = Number(coctailName.length) * Number(coctailAmount);
        if (coctailPrice % 2 !== 0) {
            coctailPrice = coctailPrice * 0.75
        }
        totalPrice += coctailPrice;
        if (totalPrice >= wantedProfit) {
            console.log('Target acquired.');
            break;
        }
        coctailName = input[index]
        index++;
        coctailAmount = input[index];
        index++
    }
    if (coctailName === 'Party!') {
        console.log(`We need ${(wantedProfit - totalPrice).toFixed(2)} leva more.`)
    }
    console.log(`Club income - ${totalPrice.toFixed(2)} leva.`)
}
club(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"])