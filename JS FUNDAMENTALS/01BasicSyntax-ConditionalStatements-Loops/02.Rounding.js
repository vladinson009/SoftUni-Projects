function rounding(number, precisionOfRounding) {
    if (precisionOfRounding > 15) {
        precisionOfRounding = 15
    }
    console.log(parseFloat(number.toFixed(precisionOfRounding)));
}
rounding(10.5, 3)