function skiTrip(input) {

    let day = Number(input[0]);
    let roomType = input[1];
    let feedback = input[2];

    let pricePerNight = Number('');
    let night = day - 1;

    if (roomType === 'room for one person') {
        pricePerNight = 18;
    } else if (roomType === 'apartment') {
        if (day < 10) {
            pricePerNight = 25 * 0.7;
        } else if (day > 15) {
            pricePerNight = 25 * 0.5;
        } else {
            pricePerNight = 25 * 0.65;
        }
    } else if (roomType === 'president apartment') {
        if (day < 10) {
            pricePerNight = 35 * 0.90;
        } else if (day > 15) {
            pricePerNight = 35 * 0.8;
        } else {
            pricePerNight = 35 * 0.85;
        }
    }
    let totalPrice = pricePerNight * night;
    if (feedback === 'positive') {
        totalPrice *= 1.25;
    } else if (feedback === 'negative') {
        totalPrice *= 0.9
    }
    console.log((totalPrice).toFixed(2));
}
skiTrip(["30", "president apartment", "negative"])