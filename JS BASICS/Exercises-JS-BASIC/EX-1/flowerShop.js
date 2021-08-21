function flower(input) {
    let flower1 = Number(input[0]) * 3.25;
    let flower2 = Number(input[1]) * 4;
    let flower3 = Number(input[2]) * 3.5;
    let flower4 = Number(input[3]) * 8;
    let presentPrice = Number(input[4]);

    let allFlowers = flower1 + flower2 + flower3 + flower4;
    let totalProfit = allFlowers - (allFlowers * 0.05);

    if (presentPrice <= totalProfit)
        console.log(`She is left with ${Math.floor(totalProfit - presentPrice)} leva.`);

    else
        console.log(`She will have to borrow ${Math.ceil(presentPrice - totalProfit)} leva.`)
}
flower(['2', '3', '5', '1', '50'])