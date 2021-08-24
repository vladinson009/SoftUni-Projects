function fuelCompany(distance, people, price) {
    let increaseFuel = people * 0.1;
    let fuel = (distance / 100) * (7 + increaseFuel)
    let money = fuel * price
    console.log(`Needed money for that trip is ${money.toFixed(2)}lv.`);
}
fuelCompany(260, 9, 2.49)