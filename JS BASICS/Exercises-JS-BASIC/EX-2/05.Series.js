function series(input) {
    let index = 0;
    let budget = Number(input[index++]);
    let seriesNumber = Number(input[index++]);
    let seriesName = (input[index++]);
    let seriesPrice = Number(input[index++]);

    for (let i = 0; i < seriesNumber; i++) {
        switch (seriesName) {
            case 'Thrones':
                seriesPrice *= 0.5;
                break;
            case 'Lucifer':
                seriesPrice *= 0.6;
                break;
            case 'Protector':
                seriesPrice *= 0.7;
                break;
            case 'TotalDrama':
                seriesPrice *= 0.8;
                break;
            case 'Area':
                seriesPrice *= 0.9;
                break;
        }
        budget -= seriesPrice;
        seriesName = (input[index++]);
        seriesPrice = Number(input[index++]);
    }
    if (budget >= 0) {
        console.log(`You bought all the series and left with ${budget.toFixed(2)} lv.`)
    } else {
        console.log(`You need ${Math.abs(budget).toFixed(2)} lv. more to buy the series!`)
    }
}
series(["25", "6", "Teen Wolf", "8", "Protector", "5", "TotalDrama", "5", "Area", "4", "Thrones", "5", "Lucifer", "9"])