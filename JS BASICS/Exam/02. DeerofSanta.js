function deersOfSanta(input) {

    let daysNoSanta = Number(input[0]);
    let foodInKg = Number(input[1]);
    let foodForFirst = Number(input[2]);
    let foodForSecond = Number(input[3]);
    let foodForThird = Number(input[4]);

    let neededFirst = daysNoSanta * foodForFirst;
    let neededSecond = daysNoSanta * foodForSecond;
    let neededThird = daysNoSanta * foodForThird;

    let neededTotal = neededFirst + neededSecond + neededThird;
    let result = Math.abs(foodInKg - neededTotal)
    if(foodInKg >= neededTotal) {
        console.log(`${Math.floor(result)} kilos of food left.`);
    }else {
        console.log(`${Math.ceil(result)} more kilos of food are needed.`);
    }
}

deersOfSanta(["5",
"10",
"2.1",
"0.8",
"11"])