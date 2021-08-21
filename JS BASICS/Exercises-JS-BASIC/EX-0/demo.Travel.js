function traveling(input) {
    let km = Number(input[0]); // Пропътувани километри
    let time = (input[1]); // Ден/Нощ

    let taxiTax = Number(0.7); // Такса
    let taxiPrice = Number(0.79); // Дневно такси
    let taxiDay = Number(taxiTax + taxiPrice * km); // Цена през деня
    let taxiNight = Number(taxiTax + (taxiPrice + 0.11) * km); // Цена през нощта

    let bussPrice = Number(0.09 * km); // Автобус цена за км

    let trainPrice = Number(0.06 * km); // Влак цена за км
    let transportPrice = Number('') // Цена на пътуването

    if (km < 20) {
        if (time === 'day')
            transportPrice = taxiDay;


    }
    else if (km < 20) {
        if (time === 'night')
            transportPrice = taxiNight;

    }
    else if (km > 20) {
        if (km <= 100)
            transportPrice = bussPrice;
    }
    if (km > 100) {
        transportPrice = trainPrice;
        
    }
    console.log(transportPrice.toFixed(2))
}
traveling(['7', 'night'])