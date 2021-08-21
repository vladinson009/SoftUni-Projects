function pet(input) {
    let days = Number(input[0]); //брой дни
    let foodKg = Number(input[1]); //оставена храна в килограми
    let dogFoodDayKg = Number(input[2]); //на ден за кучето в килограми
    let catFoodDayKg = Number(input[3]); //на ден за котката в килограми
    let turtleFoodG = Number(input[4]); //на ден за костенурката в грамове

    let dogNeeds = days * dogFoodDayKg;
    let catNeeds = days * catFoodDayKg;
    let turtleNeeds = days * (turtleFoodG / 1000);

    let totalFood = dogNeeds + catNeeds + turtleNeeds;
if(totalFood <= foodKg) {
    console.log(`${Math.floor(foodKg - totalFood)} kilos of food left.`)
} else
    console.log(`${Math.ceil(totalFood - foodKg)} more kilos of food are needed.`)
} 
pet(['5','10', '2.1', '0.8', '321'])