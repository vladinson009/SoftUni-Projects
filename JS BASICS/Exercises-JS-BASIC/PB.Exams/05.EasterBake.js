function easterBake(input) {
    let index = 0;
    let cakeNumber = Number(input[index++]);
    let sugarAmount = Number(input[index++]);
    let flourAmount = Number(input[index++]);

    let sugarPack = 0;
    let flourPack = 0;

    let totalSugar = 0;
    let totalFlour = 0;

    let mostSugar = 0;
    let mostFlour = 0;

    while (index <= input.length) {
        totalSugar += sugarAmount;
        totalFlour += flourAmount;
        if (sugarAmount > mostSugar) {
            mostSugar = sugarAmount;
        }
        if (flourAmount > mostFlour) {
            mostFlour = flourAmount;
        }
        sugarAmount = Number(input[index++]);
        flourAmount = Number(input[index++]);
    }
    sugarPack = Math.ceil(totalSugar / 950)
    flourPack = Math.ceil(totalFlour / 750)

    console.log(`Sugar: ${sugarPack}
Flour: ${flourPack}
Max used flour is ${mostFlour} grams, max used sugar is ${mostSugar} grams.`);
}
easterBake(["3",
    "400",
    "350",
    "250",
    "300",
    "450",
    "380"
])