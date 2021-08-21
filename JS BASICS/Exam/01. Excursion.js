function excursion(input) {

    let peopleInGroup = Number(input[0]);
    let nightAmount = Number(input[1]);
    let transportCardsAmount = Number(input[2]);
    let museumTicketsAmount = Number(input[3]);

    let nightPerPerson = nightAmount * 20;
    let transportCardPrice = transportCardsAmount * 1.6;
    let museumTicketsPrice = museumTicketsAmount * 6;
    
    let totalPerPerson = nightPerPerson + transportCardPrice + museumTicketsPrice;
    let totalForTheGroup = totalPerPerson * peopleInGroup;
    let sumAfterUnexpectedExpenses = totalForTheGroup * 1.25;

    console.log((sumAfterUnexpectedExpenses.toFixed(2)));
}

excursion(["20",
"14",
"30",
"6"])