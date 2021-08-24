function theatrePromotions(typeOfDay, age) {
    let price = 0;
    let boolean = true;
    if (0 <= age && age <= 18) {
        switch (typeOfDay) {
            case 'Weekday':
                price = 12;
                break;
            case 'Weekend':
                price = 15;
                break;
            case 'Holiday':
                price = 5;
                break;
        }
    } else if (18 < age && age <= 64) {
        switch (typeOfDay) {
            case 'Weekday':
                price = 18;
                break;
            case 'Weekend':
                price = 20;
                break;
            case 'Holiday':
                price = 12;
                break;
        }
    } else if (64 < age && age <= 122) {
        switch (typeOfDay) {
            case 'Weekday':
                price = 12;
                break;
            case 'Weekend':
                price = 15;
                break;
            case 'Holiday':
                price = 10;
                break;
        }
    } else {
        boolean = false;
        console.log('Error!');
    }
    if (boolean) {
        console.log(`${price}$`);
    }
}
theatrePromotions('Weekday',
    42)