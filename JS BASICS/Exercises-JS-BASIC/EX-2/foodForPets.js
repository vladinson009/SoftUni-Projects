function foodForPets(input) {
    let days = Number(input[0]);
    let food = Number(input[1]);

    let dogFood = Number('');
    let catFood = Number('');
    let countDays = Number('');
    let thirdDay = Number('');
    let totalFood = Number('');
    let biscuit = Number('')
    let biscuitAmount = 0

    for (let i = 2; i <= input.length - 1; i++) {
        let perDay = Number(input[i]);
        if (i % 2 === 0) {
            dogFood += perDay
        } else {
            catFood += perDay
        }
        
        if (i % 6 === 0 || i % 7 === 0) {
            thirdDay = thirdDay + perDay;
            biscuitAmount++;

        }
    } totalFood = catFood + dogFood;
    biscuit = thirdDay * 0.1;
    let percentfood = (totalFood / food ) * 100;
    let fromDog = (dogFood / totalFood) * 100;
    let fromCat = (catFood /totalFood) * 100;

console.log(`Total eaten biscuits: ${biscuit.toFixed(0)}gr.`);
console.log(`${percentfood.toFixed(2)}% of the food has been eaten.`);
console.log(`${fromDog.toFixed(2)}% eaten from the dog.`);
console.log(`${fromCat.toFixed(2)}% eaten from the cat.`);
}

foodForPets(['3', '1000', '300', '20', '100', '30', '110', '40'])