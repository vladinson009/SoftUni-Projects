function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);

    let apartamentPrice = 0;
    let studioPrice = 0;
    switch (month) {
        case 'May':
        case 'October':
            studioPrice = 50 * nights;
            apartamentPrice = 65 * nights;
            if (nights > 7 && nights <= 14) {
                studioPrice *= 0.95;
            } else if (nights > 14) {
                studioPrice *= 0.7;
                apartamentPrice *= 0.9
            }
            break;
        case 'June':
        case 'September':
            studioPrice = 75.2 * nights;
            apartamentPrice = 68.7 * nights;
            if (nights > 14) {
                studioPrice *= 0.8;
                apartamentPrice *= 0.9;
            }
            break;
        case 'July':
        case 'August':
            studioPrice = 76 * nights;
            apartamentPrice = 77 * nights;
            if (nights > 14) {
                apartamentPrice *= 0.9;
            }
            break;
    }
    console.log(`Apartment: ${apartamentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`)
}
hotelRoom(["May",
"15"])

hotelRoom(["June",
"14"])

hotelRoom(["August",
"20"])