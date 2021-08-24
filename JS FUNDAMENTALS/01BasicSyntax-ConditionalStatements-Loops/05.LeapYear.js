function leapYear(year) {
    let boolean = false;
    if (year % 4 === 0) {
        boolean = true;
        if (year % 100 === 0) {
            boolean = false;
            if (year % 400 === 0) {
                boolean = true;
            }
        }
    } else {
        boolean = false
    }

    if (boolean) {
        console.log('yes');
    } else console.log('no');
}
leapYear(1900)