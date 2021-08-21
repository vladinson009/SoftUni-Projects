function tournament(input) {

    let days = Number(input[0]);
    let index = 1;
    let theString = input[index];

    let winPerDay = 0;
    let win = 0;
    let lose = 0;

    let winDays = 0;
    let loseDays = 0;
    let totalMoney = 0;
    for (let i = 0; i < days; i++) {
        theString = input[index];

        while (theString !== 'Finish') {
            switch (theString) {
                case 'win':
                    win++;
                    winPerDay += 20;
                    break;
                case 'lose':
                    lose++;
                    break;
            }
            theString = input[index++];
        }
        if (win > lose) {
            winDays++;
            winPerDay = winPerDay * 1.1;
            totalMoney += winPerDay;
        } else {
            loseDays++;
            totalMoney += winPerDay;
        }
        win = 0
        lose = 0
        winPerDay = 0
    }
    if (winDays > loseDays) {
        totalMoney *= 1.2
    }
    if (winDays > loseDays) {
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`)
    }
}
tournament(["3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"
])