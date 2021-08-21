function addBags(input) {

    let priceLuggageOver20 = Number(input[0]);
    let luggageKg = Number(input[1]);
    let daysUntilTheTrip = Number(input[2]);
    let luggageAmount = Number(input[3]);
    let feeOfLuggage = 0;
    if (luggageKg < 10) {
        feeOfLuggage = priceLuggageOver20 * 0.2;
    } else if (luggageKg <= 20) {
        feeOfLuggage = priceLuggageOver20 * 0.5;
    } else {
        feeOfLuggage = priceLuggageOver20;

    }
    if (daysUntilTheTrip > 30) {
        feeOfLuggage *= 1.1;
    } else if (daysUntilTheTrip >= 7) {
        feeOfLuggage *= 1.15;
    } else if (daysUntilTheTrip < 7) {
        feeOfLuggage *= 1.4;
    }
    console.log(`The total price of bags is: ${(feeOfLuggage*luggageAmount).toFixed(2)} lv.`);
}
addBags(["30", "18", "15", "2"])