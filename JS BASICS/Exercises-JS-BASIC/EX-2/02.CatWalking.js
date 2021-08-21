function catWalking(input) {

    let minuteWalkDay = Number(input[0]);
    let walkPerDay = Number(input[1]);
    let eatenCaloriesDay = Number(input[2]);

    let burnedCalories = minuteWalkDay * 5;
    let totalBurned = burnedCalories * walkPerDay;

    if (totalBurned >= (eatenCaloriesDay * 0.5)) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalBurned}.`);

    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalBurned}.`)
    }
}
catWalking(["30", "3", "600"])