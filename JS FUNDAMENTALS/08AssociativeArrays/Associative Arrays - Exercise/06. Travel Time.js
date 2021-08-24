function travelTime(input) {
    let myList = {};
    for (let el of input) {
        let [country, town, cost] = el.split(' > ');
        cost = Number(cost);
        if (!myList.hasOwnProperty(country)) {
            myList[country] = {};
        }
        if (!myList[country].hasOwnProperty(town)) {
            myList[country][town] = cost;
        } else {
            if (myList[country][town] > cost) {
                myList[country][town] = cost
            }
        }
    }
    let sortedCountries = Object.keys(myList).sort((a, b) => a.localeCompare(b));

    for (let country of sortedCountries) {
        let currentTown = Object.entries(myList[country])
            .sort((a, b) => a[1] - b[1]);
        let string = ''
        for (let city of currentTown) {
            // city.sort((a, b) => b[1] - a[1])
            string += `${([...city].join(' -> '))} `
        }
        console.log(`${country} -> ${string}`);
    }
}














// for (let country of sortedCountries) {
//     let town = Object.entries(myList[country]);
//     town.sort((a, b) => a[1] - b[1]);
//     town.forEach((value, index) => {
//         town[index] = value.join(' -> ')
//     });
//     let pricePerTown = town.join(' ');
//     console.log(`${country} -> ${pricePerTown}`)
// }
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);