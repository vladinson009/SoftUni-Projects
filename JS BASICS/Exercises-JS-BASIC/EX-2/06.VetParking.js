function vetParking(input) {
    let day = Number(input[0]);
    let hours = Number(input[1]);
    let pricePerH = 0
    let total = 0
    for (let i = 1; i <= day; i++) {
        for (let h = 1; h <= hours; h++) {  
            if (i % 2 === 0 && h % 2 !== 0) {
                pricePerH += 2.5;
            } else if (i % 2 !== 0 && h % 2 === 0) {
                pricePerH += 1.25;
            } else {
                pricePerH += 1;
            }
        }
        total += pricePerH
        console.log(`Day: ${i} - ${pricePerH.toFixed(2)} leva`)
        pricePerH = 0
    }
    console.log(`Total: ${total.toFixed(2)} leva`)
}
vetParking(["5", "2"])