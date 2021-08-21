function charity(input) {

    let campaignDays = Number(input[0]);
    let cookerNumber = Number(input[1]);
    let cakeNumber = Number(input[2]);
    let waffelsNumber = Number(input[3]);
    let pancakesNumber = Number(input[4]);

    let cakePerDay = cakeNumber * 45;
    let waffelsPerDay = waffelsNumber * 5.80;
    let pancakesPerDay = pancakesNumber * 3.20;

    let totalPerDay = (cakePerDay + waffelsPerDay + pancakesPerDay) * cookerNumber;
    let totalPerCampaign = totalPerDay * campaignDays;
    let totalAfterExpenses = totalPerCampaign - (totalPerCampaign / 8);

    console.log(totalAfterExpenses)
}

charity(['23', '8', '14', '30', '16'])