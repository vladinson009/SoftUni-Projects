function bitcoinMining(input) {
    let index = 0;
    let goldPerDay = input[index++];
    let pricePerBitcoin = 11949.16;
    let pricePerGGold = 67.51;

    let totalBitcoin = 0;
    let totalBGN = 0;
    let dayFromFirstBitcoin = 0;
    let isBitcoin = false;
    for (let i = 1; i <= input.length; i++) {
        let currentLvFromGold = pricePerGGold * goldPerDay;
        if (i % 3 === 0) {
            currentLvFromGold *= 0.7;
        }
        totalBGN += currentLvFromGold;
        while (totalBGN >= pricePerBitcoin) {
            totalBitcoin++;
            totalBGN -= pricePerBitcoin;
            if (totalBitcoin === 1) {
                dayFromFirstBitcoin = i
                isBitcoin = true;
            }
        }
        goldPerDay = input[index++];
    }
    console.log(`Bought bitcoins: ${totalBitcoin}`);
    if (isBitcoin) {
        console.log(`Day of the first purchased bitcoin: ${dayFromFirstBitcoin}`);
    }
    console.log(`Left money: ${totalBGN.toFixed(2)} lv.`);
}
bitcoinMining([3124.15, 504.212, 2511.124])