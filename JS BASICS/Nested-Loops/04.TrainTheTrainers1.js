function trainTheTrainers(input) {
    let index = 0;
    let numOfJ = Number(input[index++]);
    let nameOfPresentation = input[index++];
    let totalApproxGrade = 0;
    let totalGrade = 0;
    while (nameOfPresentation !== 'Finish') {
        let approxGrade = 0;
        for (let i = 0; i < numOfJ; i++) {
            let grade = Number(input[index++]);
            approxGrade += grade;
            totalGrade++;

        }
        totalApproxGrade += approxGrade;
        console.log(`${nameOfPresentation} - ${(approxGrade / numOfJ).toFixed(2)}.`);

        nameOfPresentation = input[index++];
    }
    console.log(`Student's final assessment is ${(totalApproxGrade / totalGrade).toFixed(2)}.`);
}
trainTheTrainers(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"
])