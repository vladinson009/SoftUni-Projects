function fruitMarket(input) {

    const strawberryPrice = Number(input[0]);
    const bananaInKg = Number(input[1]);
    const orangeInKg = Number(input[2]);
    const raspberryInKg = Number(input[3]);
    const strawberryInKg = Number(input[4]);

    const raspberryPrice = strawberryPrice / 2;
    const orangePrice = raspberryPrice * 0.6;
    const bananaPrice = raspberryPrice * 0.2;

    const result = strawberryInKg * strawberryPrice + bananaInKg *
        bananaPrice + orangeInKg * orangePrice + raspberryInKg * raspberryPrice;
    console.log(result);
}

fruitMarket(["48", "10", "3.3", "6.5", "1.7"]);
fruitMarket(["63.5", "3.57", "6.35", "8.15", "2.5"])