function newHouse(input) {
    let typeOfFlower = input[0];
    let flowerAmout = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;
    switch (typeOfFlower) {
        case 'Roses':
            price = 5 * flowerAmout;
            if (flowerAmout > 80) {
                price *= 0.9;
            }
            break;
        case 'Dahlias':
            price = 3.8 * flowerAmout;
            if (flowerAmout > 90) {
                price *= 0.85;
            }
            break;
        case 'Tulips':
            price = 2.8 * flowerAmout;
            if (flowerAmout > 80) {
                price *= 0.85;
            }
            break;
        case 'Narcissus':
            price = 3 * flowerAmout;
            if (flowerAmout < 120) {
                price *= 1.15;
            }
            break;
        case 'Gladiolus':
            price = 2.5 * flowerAmout;
            if (flowerAmout < 80) {
                price *= 1.2;
            }
            break;
    }
    if (budget < price) {
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
    } else {
        console.log(`Hey, you have a great garden with ${flowerAmout} ${typeOfFlower} and ${(budget- price).toFixed(2)} leva left.`)
    }
}
newHouse(["Gladiolus",
    "64",
    "160"
])