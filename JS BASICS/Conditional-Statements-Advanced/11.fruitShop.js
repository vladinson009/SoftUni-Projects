function fruitShop(input) {

    let fruit = input[0];
    let day = input[1];
    let amount = Number(input[2]);
    let price = 0;
    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            switch (fruit) {
                case 'banana':
                    price = 2.5 * amount;
                    break;
                case 'apple':
                    price = 1.2 * amount;
                    break;
                case 'orange':
                    price = 0.85 * amount;
                    break;
                case 'grapefruit':
                    price = 1.45 * amount;
                    break;
                case 'kiwi':
                    price = 2.70 * amount;
                    break;
                case 'pineapple':
                    price = 5.5 * amount;
                    break;
                case 'grapes':
                    price = 3.85 * amount;
                    break;
                default:
                    console.log('error');
                    break;
            }
            break;

        case 'Saturday':
        case 'Sunday':
            switch (fruit) {
                case 'banana':
                    price = 2.7 * amount;
                    break;
                case 'apple':
                    price = 1.25 * amount;
                    break;
                case 'orange':
                    price = 0.90 * amount;
                    break;
                case 'grapefruit':
                    price = 1.60 * amount;
                    break;
                case 'kiwi':
                    price = 3 * amount;
                    break;
                case 'pineapple':
                    price = 5.6 * amount;
                    break;
                case 'grapes':
                    price = 4.2 * amount;
                    break;
                default:
                    console.log('error');
                    break;
            }
            break;
        default:
            console.log('error');
            break
    }
    if (price !== 0) {
        console.log(price.toFixed(2))
    }
}
fruitShop(["apple", "Tuesday", "2"])