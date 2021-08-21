function Price(input) {
    let dogFood = 2.50;
    let otherFood = 4;
    let dog = Number(input[0]);
    let otherAnimal = Number(input[1]);
    let result = (dogFood * dog) + (otherAnimal * otherFood) + ' lv.'
    console.log(result)
}
Price(['5', '4']) //Your Dogs / Your Neighbor animal 