function examPreparation(input) {
    index = 0;
    let badGrade = Number(input[index++]);
    let nameOfTheTask = input[index++];
    let currentGrade = Number(input[index++]);

    let poorGradesCount = 0;
    let averageScore = 0;
    let taskAmount = 0
    let lastProblem = ''
    while (nameOfTheTask !== 'Enough') {
        lastProblem = nameOfTheTask
        averageScore += currentGrade;
        if (currentGrade <= 4) {
            poorGradesCount++;
            if (poorGradesCount === badGrade) {
                console.log(`You need a break, ${poorGradesCount} poor grades.`);
                break;
            }
        }
        taskAmount++
        nameOfTheTask = input[index++];
        currentGrade = Number(input[index++]);
    }
    if (nameOfTheTask === 'Enough') {
        console.log(`Average score: ${(averageScore / taskAmount).toFixed(2)}
Number of problems: ${taskAmount}
Last problem: ${lastProblem}`);
    }
}
examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
examPreparation(["2","Income","3","Game Info","6","Best Player","4"])