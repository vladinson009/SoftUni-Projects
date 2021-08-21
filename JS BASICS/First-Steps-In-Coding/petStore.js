function petStore(input) {
    let dogsNumber = Number(input[0]);
    let otherAnimal = Number(input[1]);
    let dogFoodPrice = Number(2.50);
    let otherFood = Number(4)

    let result = dogsNumber * dogFoodPrice + otherAnimal * otherFood

    console.log(`${result} lv.`)
}
petStore(['5', '4'])