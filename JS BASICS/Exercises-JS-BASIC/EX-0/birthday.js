function birthday(input) {
    let rent = Number(input[0]);
    let cake = Number(rent * 0.2);
    let drinks = Number(cake - (cake * 0.45));
    let animator = rent / 3;
    let result = rent + cake + drinks + animator;

    console.log(result)
}
birthday(['2250']) // Birthday expences