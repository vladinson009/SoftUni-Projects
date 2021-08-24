function theLift(input) {
    let people = Number(input.shift());
    let wagons = input.shift().split(' ').map(Number);

    for (let i = 0; i < wagons.length; i++) {

        while (wagons[i] < 4) {

            people -= 1;
            wagons[i] = wagons[i] + 1
            if (people <= 0 && wagons[wagons.length - 1] !== 4) {
                console.log(`The lift has empty spots!
${wagons.join(' ')}`);
                return;
            }
        }
    }
    if (people > 0 && wagons[wagons.length - 1] == 4) {
        console.log(`There isn't enough space! ${people} people in a queue!
${wagons.join(' ')}`);
        return;
    }
    console.log(wagons.join(' '));
}
theLift([
    "20",
    "0 0 0 0 0"
]);