function birthday(input) {

    let hallRent = Number(input[0]);

    let cake = hallRent * 0.20;
    let drinks = cake * 0.55;
    let animator = hallRent / 3;

    let totalPrice = hallRent + cake + drinks + animator;

    console.log(totalPrice);
}

birthday(['2250'])