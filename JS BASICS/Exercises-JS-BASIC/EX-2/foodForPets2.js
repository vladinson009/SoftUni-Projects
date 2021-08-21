function foodPets(input) {
    let index = 0
    let days = Number(input[index]);
    index++;
    let totalFood = Number(input[index]);
    index++;
    let dogDay = Number(input[index]);
    index++;
    let catDay = Number(input[index]);
    index++;
    let currentDay = 1
    let dogFood = 0;
    let catFood = 0;
    let biscuitFood = 0

    for (let i = currentDay; i <= days; i++) {
        if (currentDay % 3 == 0) {
            biscuitFood += (catDay + dogDay) * 0.1;
        }
        dogFood += dogDay;
        catFood += catDay;
        dogDay = Number(input[index]);
        index++;
        catDay = Number(input[index]);
        index++;
        currentDay++;
    }
    let totalEatenFood = (catFood + dogFood) / totalFood * 100
    let totalDog = dogFood / (catFood + dogFood) * 100
    let totalCat = catFood / (catFood + dogFood) * 100

    console.log(`Total eaten biscuits: ${Math.round(biscuitFood)}gr.`)
    console.log(`${totalEatenFood.toFixed(2)}% of the food has been eaten.`)
    console.log(`${totalDog.toFixed(2)}% eaten from the dog.`)
    console.log(`${totalCat.toFixed(2)}% eaten from the cat.`)
}

foodPets(["3", "1000", "300", "20", "100", "30", "110", "40"])