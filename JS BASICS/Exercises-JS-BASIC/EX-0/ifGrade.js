function demoIf(input) {
    let grade = Number(input[0]);
    if (grade > 6) {
        console.log('Not available grade!');
    } else if (grade === 6) {
        console.log(`Perfect! ${grade}`);
    } else if (grade >= 5.5) {
        console.log(`Excellent! ${grade.toFixed(1)}`);
    } else if (grade >= 4.5) {
        console.log(`Very Good!! ${grade.toFixed(1)}`);
    } else if (grade >= 3.5) {
        console.log(`Good! ${grade.toFixed(1)}`);
    } else if (grade >= 3) {
        console.log(`Middle! ${grade.toFixed(1)}`);
    } else if (grade >= 2) {
        console.log(`Poor! ${grade.toFixed(1)}`);
    } else if (grade < 2) {
        console.log('Not available grade!')
    }

}
demoIf(['4.45'])