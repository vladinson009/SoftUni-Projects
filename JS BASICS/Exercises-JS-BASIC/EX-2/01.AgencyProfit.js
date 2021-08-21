function agencyProfit(input) {

    let avioName = input[0];
    let ticketsAdult = Number(input[1]);
    let ticketsKids = Number(input[2]);
    let pricePerAdultTicket = Number(input[3]);
    let fee = Number(input[4]);
    let pricePerKidsTicket = pricePerAdultTicket * 0.3;

    let totalPrice = ticketsAdult * (pricePerAdultTicket + fee) + ticketsKids * (pricePerKidsTicket + fee);
    let profit = totalPrice * 0.2;

    console.log(`The profit of your agency from ${avioName} tickets is ${profit.toFixed(2)} lv.`)
}
agencyProfit(["WizzAir", "15", "5", "120", "40"])