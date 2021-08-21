function aluminium(input) {
    let joineryAmount = Number(input[0]);
    let joinerySize = input[1];
    let deliveryMethod = input[2];
    let joineryPrice = Number('');

    if (joinerySize === '90X130') {
        joineryPrice = 110;
        if (joineryAmount >= 30 && joineryAmount <= 60) {
            joineryPrice = joineryAmount * (joineryPrice - (joineryPrice * 0.05));
        } else if (joineryAmount > 60) {
            joineryPrice = joineryAmount * (joineryPrice - (joineryPrice * 0.08));
        } else if (joineryAmount < 30) {
            joineryPrice = joineryAmount * joineryPrice;
        }
    } else if (joinerySize === '100X150') {
        joineryPrice = 140;
        if (joineryAmount >= 40 && joineryAmount <= 80) {
            joineryPrice = joineryAmount * (joineryPrice - (joineryPrice * 0.06));
        } else if (joineryAmount > 80) {
            joineryPrice = joineryAmount * (joineryPrice - (joineryPrice * 0.1));
        } else if (joineryAmount < 40 ) {
            joineryPrice = joineryAmount * joineryPrice;
        }
    } else if (joinerySize === '130X180') {
        joineryPrice = 190;
        if (joineryAmount >= 20 && joineryAmount <= 50) {
            joineryPrice = joineryAmount * (joineryPrice - (joineryPrice * 0.07));
        } else if (joineryAmount > 50) {
            joineryPrice = joineryAmount * (joineryPrice - (joineryPrice * 0.12));
        } else if (joineryAmount < 20) {
            joineryPrice = joineryAmount * joineryPrice;
        }
    } else if (joinerySize === '200X300') {
        joineryPrice = 250;
        if (joineryAmount >= 25 && joineryAmount <= 50) {
            joineryPrice = joineryAmount * (joineryPrice - (joineryPrice * 0.09));
        } else if (joineryAmount > 50) {
            joineryPrice = joineryAmount * (joineryPrice - (joineryPrice * 0.14));
        } else if (joineryAmount < 25) {
            joineryPrice = joineryAmount * joineryPrice;
        }
    }
    if (deliveryMethod === 'With delivery') {
        joineryPrice = joineryPrice + 60;
    } else if (deliveryMethod === 'Without delivery') {
        joineryPrice = joineryPrice;
    }

    if (joineryAmount > 99) {
        joineryPrice = joineryPrice - (joineryPrice * 0.04);
    }
    if (joineryAmount <= 10) {
        console.log('Invalid order');
    } else {
        console.log(`${(joineryPrice).toFixed(2)} BGN`);
    }

}
aluminium(['2', '130X180', 'With delivery'])

//https://judge.softuni.bg/Contests/Practice/Index/2507#2