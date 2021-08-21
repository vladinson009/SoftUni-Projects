function movieStar(input) {
    let index = 0;
    let budget = Number(input[index++]);
    let actorName = input[index++];
    let actorFee = Number(input[index++]);


    while (actorName !== 'ACTION') {
        if (actorName.length > 15) {
            budget = budget - budget * 0.2;
            index--
        } else {
            budget -= actorFee;
        }
        if (budget <= 0) {
            console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`);
            break;
        }
        actorName = input[index++];
        actorFee = Number(input[index++]);
    }
    if (budget > 0) {
        console.log(`We are left with ${budget.toFixed(2)} leva.`)
    }

}

movieStar(["170000",
"Ben Affleck",
"40000.50",
"Zahari Baharov",
"80000",
"Tom Hanks",
"2000.99",
"ACTION"])