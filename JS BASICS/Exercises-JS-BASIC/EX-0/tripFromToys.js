function letsTrip(input) {
    let priceTrip = Number(input[0]);
    let puzzle = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let truck = Number(input[5]);

    let toysAmount = puzzle + dolls + bears + minions + truck;
    let toysProfit = puzzle * 2.6 + dolls * 3 + bears * 4.1 + minions * 8.2 + truck * 2;

    if (toysAmount >= 50) {
        toysProfit = toysProfit * 0.75;
    }
    toysProfit = toysProfit * 0.90;
    if (toysProfit >= priceTrip) {
        console.log(`Yes! ${(toysProfit - priceTrip).toFixed(2)} lv left.`);
    } else {console.log(`Not enough money! ${Math.abs(toysProfit - priceTrip).toFixed(2)} lv needed.`)}
}
letsTrip(['320', '8', '2', '5', '5', '1'])