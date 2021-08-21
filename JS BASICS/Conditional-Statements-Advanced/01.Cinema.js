function cinema(input) {

    let typeProjection = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);
    let result = 0;
    switch (typeProjection) {
        case 'Premiere':
            result = r * c * 12;
            break;
        case 'Normal':
            result = r * c * 7.5;
            break;
        case 'Discount':
            result = r * c * 5;
            break;
    }
    console.log(`${result.toFixed(2)} leva`);
}
cinema(["Normal",
"21",
"13"])