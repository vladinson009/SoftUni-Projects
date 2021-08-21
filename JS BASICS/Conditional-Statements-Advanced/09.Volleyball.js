function volleyBall(input) {

    let typeOfYear = input[0];
    let p = Number(input[1]);
    let h = Number(input[2]);
    let weekendInSofia = (48 - h) * 3 / 4;
    let holidayDays = p * (2 / 3);
    let totalGames = weekendInSofia + h + holidayDays;
    switch (typeOfYear) {
        case 'leap':
            totalGames += (totalGames * 0.15);
    }
    console.log(Math.floor(totalGames))
}
volleyBall(["leap", "5", "2"])
volleyBall(["normal", "3", "2"])
volleyBall(["leap", "2", "3"])
volleyBall(["normal", "11", "6"])
volleyBall(["leap", "0", "1"])
volleyBall(["normal", "6", "13"])