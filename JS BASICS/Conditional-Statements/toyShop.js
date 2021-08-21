function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzle = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let totalPrice = puzzle * 2.6 + dolls * 3 + bears * 4.1 + minions * 8.2 + trucks * 2;
    let totalToys = puzzle + dolls + bears + minions + trucks;
    

    if (totalToys >= 50 ) {
        totalPrice = totalPrice * 0.75;

    } else {
        totalPrice = totalPrice;
    }
    let rent = totalPrice * 0.1;
    totalPrice = totalPrice - rent;

    if(totalPrice >= tripPrice) {
        console.log(`Yes! ${(totalPrice - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - totalPrice).toFixed(2)} lv needed.`)
    }


}

toyShop(["320", "8", "2", "5", "5", "1"])




