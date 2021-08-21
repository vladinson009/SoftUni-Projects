function balls(input) {
    let numberOfballs = Number(input[0]);

    let totalPoints = 0;
    let redPoints = 0;
    let orangePoints = 0;
    let yellowPoints = 0;
    let whitePoints = 0;
    let otherPoints = 0;
    let devidedFromBlack = 0;

    for (let i = 1; i <= numberOfballs; i++) {
        let currentColor = input[i];
        if (currentColor === 'red') {
            totalPoints += 5;
            redPoints += 1;
        } else if (currentColor === 'orange') {
            totalPoints += 10;
            orangePoints += 1;
        } else if (currentColor === 'yellow') {
            totalPoints += 15;
            yellowPoints += 1;
        } else if (currentColor === 'white') {
            totalPoints += 20;
            whitePoints += 1;
        } else if (currentColor === 'black') {
            totalPoints = Math.floor(totalPoints / 2);
            devidedFromBlack += 1;
        } else {
            otherPoints += 1
        }
    }
    console.log(`Total points: ${totalPoints}`);
    console.log(`Points from red balls: ${redPoints}`);
    console.log(`Points from orange balls: ${orangePoints}`);
    console.log(`Points from yellow balls: ${yellowPoints}`);
    console.log(`Points from white balls: ${whitePoints}`);
    console.log(`Other colors picked: ${otherPoints}`);
    console.log(`Divides from black balls: ${devidedFromBlack}`);
}
balls(["5", "red", "red", "ddd", "ddd", "ddd"])


// “Total points: {всичките събрани точки}”
// “Points from red balls {броят червени топки}”
// “Points from orange balls {броят оранжеви топки}”
// “Points from yellow balls {броят жълти топки}”
// “Points from white balls {броят бели топки}”
// “Other colors picked: {броят на избраните топки извън зададените цветове}”
// “Divides from black balls: {броят на пътите, в които точките са били разделяни на 2}”