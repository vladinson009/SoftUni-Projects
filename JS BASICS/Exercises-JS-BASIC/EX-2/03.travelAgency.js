function travelAgency(input) {

    let cityName = input[0];
    let typeOfService = input[1];
    let vip = input[2];
    let days = Number(input[3]);

    let price = Number('');
    if (days < 1) {
        console.log('Days must be positive number!');
    } else {
        if (days > 7) {
            days -= 1;
        }
        if (cityName === 'Bansko' || cityName === 'Borovets') {
            if (typeOfService === 'withEquipment') {
                price = 100;
                if (vip === 'yes') {
                    price *= 0.9;
                }
                console.log(`The price is ${(price * days).toFixed(2)}lv! Have a nice time!`);
            } else if (typeOfService === 'noEquipment') {
                price = 80;
                if (vip === 'yes') {
                    price *= 0.95;
                }
                console.log(`The price is ${(price * days).toFixed(2)}lv! Have a nice time!`);
            } else {
                console.log('Invalid input!');
            }
        } else if (cityName === 'Varna' || cityName === 'Burgas') {
            if (typeOfService === 'withBreakfast') {
                price = 130;
                if (vip === 'yes') {
                    price *= 0.88;
                }
                console.log(`The price is ${(price * days).toFixed(2)}lv! Have a nice time!`);
            } else if (typeOfService === 'noBreakfast') {
                price = 100;
                if (vip === 'yes') {
                    price *= 0.93;
                }
                console.log(`The price is ${(price * days).toFixed(2)}lv! Have a nice time!`);
            } else {
                console.log('Invalid input!');
            }
        } else {
            console.log('Invalid input!');
        }
    }
}
travelAgency(["Borovets", "noEquipment", "yes", "6"])