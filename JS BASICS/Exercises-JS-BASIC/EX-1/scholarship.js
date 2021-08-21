function scholarship(input) {

    let income = Number(input[0]);
    let approxGrade = Number(input[1]);
    let minimumWage = Number(input[2]);

    let socialBenefit = minimumWage * 0.35;
    let gradeBenefit = approxGrade * 25;

    if (approxGrade >= 5.50) {
        if (income < minimumWage) {
            if (socialBenefit <= gradeBenefit) {
                console.log(`You get a scholarship for excellent results ${Math.floor(gradeBenefit)} BGN`);
            } else {
                console.log(`You get a Social scholarship ${Math.floor(socialBenefit)} BGN`);
            }
        } else if (income >= minimumWage) {
            console.log(`You get a scholarship for excellent results ${Math.floor(gradeBenefit)} BGN`);
        }

    } else if (approxGrade <= 4.50) {
        console.log('You cannot get a scholarship!');


    } else if (approxGrade > 4.5 && approxGrade < 5.5) {
        if (income < minimumWage) {
            console.log(`You get a Social scholarship ${Math.floor(socialBenefit)} BGN`);
        } else {
            console.log('You cannot get a scholarship!');
        }
    }
}
scholarship(["480.00", "4.60", "450.00"]);
scholarship(["300.00", "5.65", "420.00"])