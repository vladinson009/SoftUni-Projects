function aluminium(input) {
    let joineryAmount = Number(input[0]);
    let joinerySize = input[1];
    let deliveryMethod = input[2];
    let joineryPrice = Number('');

    if (deliveryMethod === 'With delivery') {
        deliveryMethod = Number(60);
    } else if (deliveryMethod === 'Without delivery') {
        deliveryMethod = Number(0);
    }

    if (joinerySize === '90X130') {
        joineryPrice = 110;
        if (joineryAmount > 60) {
            joineryPrice = joineryAmount * (joineryPrice - (joineryPrice * 0.08)) + deliveryMethod;
        }else if (joineryAmount > 30) {
            joineryPrice = joineryAmount * (joineryPrice - (joineryPrice * 0.05)) + deliveryMethod;
    
        } else {
            joineryPrice = joineryPrice * joineryAmount;
        }

    } 
    if (joinerySize === '100X150') {
        joineryPrice = 140;

        if (joineryAmount > 80) {
            joineryPrice = joineryAmount * (joineryPrice - (joineryPrice * 0.1)) + deliveryMethod;
        } else if (joineryAmount > 40) {
            joineryPrice = joineryAmount * (joineryPrice - (joineryPrice * 0.06)) + deliveryMethod;

        }else {
            joineryPrice = joineryPrice * joineryAmount;
        }
    }
    if (joinerySize === '130X180') {
        joineryPrice = 190;

        if (joineryAmount > 50) {
            joineryPrice = joineryAmount * (joineryPrice - (joineryPrice * 0.12)) + deliveryMethod;
        } else if (joineryAmount > 20) {
            joineryPrice = joineryAmount * (joineryPrice - (joineryPrice * 0.07)) + deliveryMethod;

        }else {
            joineryPrice = joineryPrice * joineryAmount;
        }
    }
    if (joinerySize === '200X300') {
        joineryPrice = 250;

        if (joineryAmount > 50) {
            joineryPrice = joineryAmount * (joineryPrice - (joineryPrice * 0.14)) + deliveryMethod;
        } else if (joineryAmount > 25) {
            joineryPrice = joineryAmount * (joineryPrice - (joineryPrice * 0.09)) + deliveryMethod;

        }else {
            joineryPrice = joineryPrice * joineryAmount;
        }
    }
    if (joineryAmount > 99) {
        joineryPrice = joineryPrice - (joineryPrice * 0.04);
    }
    if (joineryAmount < 10) {
        console.log('Invalid order');
    } else {
        console.log(`${joineryPrice.toFixed(2)} BGN`);
    }
}
aluminium(['2', '130X180', 'With delivery'])