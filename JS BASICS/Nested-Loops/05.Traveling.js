function traveling(input) {
    let index = 0;
    let destination = input[index++];
    let neededAmount = Number(input[index++]);
    let totalSaved = 0;
    while (destination !== 'End') {
        while (neededAmount > totalSaved) {
            let savedAmount = Number(input[index++]);
            totalSaved += savedAmount;
        }
        console.log(`Going to ${destination}!`);
        totalSaved = 0
        destination = input[index++];
        neededAmount = Number(input[index++]);
    }
}
traveling(["Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"
])