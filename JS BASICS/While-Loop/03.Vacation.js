function vacation(input) {
    let index = 0;
    let neededMoney = Number(input[index++]);
    let ownMoney = Number(input[index++]);
    let saveOrSpend = input[index++];
    let currentMoney = Number(input[index++]);

    let spendDays = 0;
    let totalDays = 0;
    while (spendDays !== 5) {
        totalDays++
        switch (saveOrSpend) {
            case 'save':
                ownMoney += currentMoney;
                spendDays = 0;
                break;
            case 'spend':
                ownMoney -= currentMoney;
                spendDays++;
                break;
        }
        if (ownMoney < 0) {
            ownMoney = 0;
        }
        if (ownMoney >= neededMoney) {
            console.log(`You saved the money for ${totalDays} days.`);
            return;
        }
        saveOrSpend = input[index++];
        currentMoney = Number(input[index++]);
    }
    console.log(`You can't save the money.
${totalDays}`)
}
vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"])