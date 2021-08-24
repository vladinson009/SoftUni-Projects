function spiceMustFlow(startingYield) {
    let totalYield = 0;
    let days = 0;
    while (startingYield >= 100) {
        days++
        let dailyYield = startingYield;
        totalYield += dailyYield - 26
        startingYield -= 10;
    }
    if (totalYield >= 26) {
        totalYield -= 26;
    }
    console.log(days);
    console.log(totalYield);
}
spiceMustFlow(450);