function vacation(people, groupType, day) {
    let pricePerPerson = 0;
    let totalPrice = 0;
    switch (groupType) {
        case 'Students':
            switch (day) {
                case 'Friday':
                    pricePerPerson = 8.45;
                    break;
                case 'Saturday':
                    pricePerPerson = 9.8;
                    break;
                case 'Sunday':
                    pricePerPerson = 10.46;
                    break;
            }
            break;
        case 'Business':
            switch (day) {
                case 'Friday':
                    pricePerPerson = 10.9;
                    break;
                case 'Saturday':
                    pricePerPerson = 15.6;
                    break;
                case 'Sunday':
                    pricePerPerson = 16;
                    break;
            }
            break;
        case 'Regular':

            switch (day) {
                case 'Friday':
                    pricePerPerson = 15;
                    break;
                case 'Saturday':
                    pricePerPerson = 20;
                    break;
                case 'Sunday':
                    pricePerPerson = 22.5;
                    break;
            }
            break;
    }
    totalPrice = pricePerPerson * people;
    if (groupType === 'Students' && people >= 30) {
        totalPrice = totalPrice * 0.85;
    } else if (groupType === 'Business' && people >= 100) {
        people -= 10;
        totalPrice = pricePerPerson * people;
    } else if (groupType === 'Regular' && people >= 10 && people <= 20) {
        totalPrice = totalPrice * 0.95
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(40,
    "Regular",
    "Saturday")