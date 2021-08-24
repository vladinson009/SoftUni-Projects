function digitsWithWords(digits) {
    let result = 0;
    switch (digits) {
        case 'one':
            result = 1;
            break;
        case 'two':
            result = 2;
        case 'three':
            result = 3;
            break;
        case 'four':
            result = 4;
            break;
        case 'five':
            result = 5;
            break;
        case 'six':
            result = 6;
            break;
        case 'seven':
            result = 7;
            break;
        case 'eight':
            result = 8;
            break;
        case 'nine':
            result = 9;
            break;
        case 'zero':
            result = 0;
            break;
    }
    console.log(result);
}
digitsWithWords('nine');