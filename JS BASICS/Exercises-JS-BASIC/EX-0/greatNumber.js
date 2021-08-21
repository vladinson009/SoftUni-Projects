function greatNumber(input) {
    let highNumber = Number(input.shift());
    let lowNumber = Number(input.shift());
    if ( highNumber > lowNumber) {
        console.log(highNumber);
    } else {console.log(lowNumber)};
}
greatNumber(['8', '7'])