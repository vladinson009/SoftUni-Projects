function shop(input) {

    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let price = Number('');
    switch (product) {
        case 'coffee':
            switch (city) {
                case 'Sofia':
                    price = 0.5 * quantity;
                    break;
                case 'Plovdiv':
                    price = 0.4 * quantity;
                    break;
                case 'Varna':
                    price = 0.45 * quantity;
                    break;
            }
            break;
        case 'water':
            switch (city) {
                case 'Sofia':
                    price = 0.8 * quantity;
                    break;
                case 'Plovdiv':
                    price = 0.7 * quantity;
                    break;
                case 'Varna':
                    price = 0.7 * quantity;
                    break;
            }
            break;
        case 'beer':
            switch (city) {
                case 'Sofia':
                    price = 1.2 * quantity;
                    break;
                case 'Plovdiv':
                    price = 1.15 * quantity;
                    break;
                case 'Varna':
                    price = 1.1 * quantity;
                    break;
            }
            break;
        case 'sweets':
            switch (city) {
                case 'Sofia':
                    price = 1.45 * quantity;
                    break;
                case 'Plovdiv':
                    price = 1.3 * quantity;
                    break;
                case 'Varna':
                    price = 1.35 * quantity;
                    break;
            }
            break;
        case 'peanuts':
            switch (city) {
                case 'Sofia':
                    price = 1.6 * quantity;
                    break;
                case 'Plovdiv':
                    price = 1.5 * quantity;
                    break;
                case 'Varna':
                    price = 1.55 * quantity;
                    break;
            }
            break;
    }
    console.log(price);
}
shop(["sweets", "Sofia", "2.23"])