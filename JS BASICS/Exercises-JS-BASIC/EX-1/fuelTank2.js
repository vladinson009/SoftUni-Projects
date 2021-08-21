function fuelTank(input) {
    let typeFuel = input[0]; //Типа на горивото
    let fuelAmount = Number(input[1]); //Количество гориво 
    let clubCard = input[2]; //Притежание на клубна карта

    let gas = 0.93 * fuelAmount; // Газ за литър
    let gasoline = 2.22 * fuelAmount; // Бензин за литър
    let diesel = 2.33 * fuelAmount; //Дизел за литър
    let price = Number('');

    if (clubCard === 'Yes') {
        gasoline = gasoline - (0.18 * fuelAmount);
        diesel = diesel - (0.12 * fuelAmount);
        gas = gas - (0.08 * fuelAmount);
    }
    if (typeFuel === 'Gasoline') {
        price = gasoline;
    } else if (typeFuel === 'Gas') {
        price = gas;
    } else if (typeFuel === 'Diesel') {
        price = diesel;
    }
    if (20 <= fuelAmount && fuelAmount <= 25) {
        price = price - (price * 0.08)
    } else if (fuelAmount > 25) {
        price = price - (price * 0.1)
    }
    console.log(`${price.toFixed(2)} lv.`);
}
fuelTank(['Diesel', '19', 'No'])