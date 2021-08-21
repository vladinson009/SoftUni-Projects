function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let destination;
    let price = 0;
    let kindOfHoliday ;
    if (budget <= 100) {
        destination = 'Bulgaria';
        if (season === 'summer') {
            price = budget * 0.3;
            kindOfHoliday = 'Camp';
        } else if (season === 'winter') {
            price = budget * 0.7;
            kindOfHoliday = 'Hotel';
        }
    } else if (budget <= 1000) {
        destination = 'Balkans';
        if (season === 'summer') {
            price = budget * 0.4;
            kindOfHoliday = 'Camp';
        } else if (season === 'winter') {
            price = budget * 0.8;
            kindOfHoliday = 'Hotel';
        }
    } else {
        destination = 'Europe';
        price = budget * 0.9
        kindOfHoliday = 'Hotel';
    }
console.log(`Somewhere in ${destination}
${kindOfHoliday} - ${price.toFixed(2)}`)
}
journey(["678.53", "winter"])