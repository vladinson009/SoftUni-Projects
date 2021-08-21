function cinemaVoucher(input) {
    let index = 0;
    let voucherAmount = Number(input[index++]);
    let command = input[index++];
    let price = 0;
    let other = 0
    let ticket = 0

    while (command !== 'End') {
        if (command.length > 8) {
            price = command.charCodeAt(0) + command.charCodeAt(1);
            if (price > voucherAmount) {
                break
            };
            ticket++
        } else {
            price = command.charCodeAt(0);
            if (price > voucherAmount) {
                break
            };
            other++
        }
        voucherAmount -= price;
        command = input[index++];
    }
    console.log(ticket);
    console.log(other);
}
cinemaVoucher(["300", "Captain Marvel", "popcorn", "Pepsi"])