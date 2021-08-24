function puppy(input) {

    let foodInKg = Number(input[0]);
    let hayInKg = Number(input[1]);
    let coverInKg = Number(input[2]);

    let guineaWeight = Number(input[3]);

    for (let i = 1; i <= 30; i++) {
        foodInKg -= 0.3
        if (i % 2 === 0) {
            hayInKg -= (foodInKg * 0.05);
        }
        if (i % 3 === 0) {
            coverInKg -= (guineaWeight / 3);
        }
        if (foodInKg < 0 || hayInKg < 0 || coverInKg < 0) {
            console.log('Merry must go to the pet store!');
            return;
        }
    }
    console.log(`Everything is fine! Puppy is happy! Food: ${foodInKg.toFixed(2)}, Hay: ${hayInKg.toFixed(2)}, Cover: ${coverInKg.toFixed(2)}.`);
}

puppy((["10",
    "5",
    "5.2",
    "1"
]))