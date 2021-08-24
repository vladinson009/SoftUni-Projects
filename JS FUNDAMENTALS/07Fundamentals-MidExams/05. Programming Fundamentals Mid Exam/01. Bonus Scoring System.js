function bonusScoringSystem(input) {
    input = input.map(Number);
    let countStudents = input.shift();
    let countLectures = input.shift();
    let initialBonus = input.shift();

    let totalBonus = 0;
    let student = 0;
    for (let i = 0; i < countStudents; i++) {
        let attendances = input[i];
        let bonus = attendances / countLectures * (5 + initialBonus);
        if (bonus > totalBonus) {
            totalBonus = bonus;
            student = attendances;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(totalBonus)}.`);
    console.log(`The student has attended ${student} lectures.`);
}
bonusScoringSystem([
    '5', '25', '30',
    '12', '19', '24',
    '16', '20'
]);