function graduation(input) {
    let index = 0;
    let name = input[index++];
    let grade = Number(input[index++]);

    let aproxGrade = 0;
    let badGrade = 0;
    let theClass = 1

    while (theClass <= 12) {
        if (grade < 4) {
            badGrade += 1;
            if (badGrade > 1) {
                theClass--
                console.log(`${name} has been excluded at ${theClass} grade`);
                break;
            }
        } else {
            aproxGrade += grade
            if (theClass === 12) {
                console.log(`${name} graduated. Average grade: ${(aproxGrade / theClass).toFixed(2)}`);
            }
        }
        grade = Number(input[index++]);
        theClass++
    }
}
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"])