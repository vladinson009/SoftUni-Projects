function godzilla(input) {

    let budget = Number(input[0]);
    let stuntman = Number(input[1]);
    let dressPricePerStuntman = Number(input[2]);

    let totalDressPrice = stuntman * dressPricePerStuntman;
    let decorate = budget * 0.1;
    let discount = totalDressPrice * 0.1;
    let totalPrice = totalDressPrice + decorate;

    if (stuntman > 150) {
        totalPrice = totalPrice - discount
    }
    if (totalPrice > budget) {
        console.log('Not enough money!');
        console.log(`Wingard needs ${(totalPrice - budget).toFixed(2)} leva more.`);
    } else {
        console.log('Action!');
        console.log(`Wingard starts filming with ${(budget - totalPrice).toFixed(2)} leva left.`)
    }
}
godzilla(["9587.88",
"222",
"55.68"])