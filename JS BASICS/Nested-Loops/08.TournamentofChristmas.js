function tournamentChristmas(input) {
    let index = 0;
    let days = Number(input[index++]);
    let totalWin = 0;
    let totalLose = 0;
    let totalMoney = 0;
    for (let i = 1; i <= days; i++) {
        let sport = input[index++];
        let dailyWin = 0;
        let dailyLose = 0;
        let dailyMoney = 0;
        while (sport !== 'Finish') {
            let results = input[index++];
            switch (results) {
                case 'win':
                    dailyWin++;
                    dailyMoney += 20;
                    break;
                case 'lose':
                    dailyLose++;
                    break;
            }
            sport = input[index++];
        }
        if (dailyWin > dailyLose) {
            dailyMoney = dailyMoney * 1.1;
            totalWin++
        } else {
            totalLose++;
        }
        totalMoney += dailyMoney
    }
    if (totalWin > totalLose) {
        totalMoney = totalMoney * 1.2;
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}
tournamentChristmas(["2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"
])