function radiansToDegrees(input) {
    let radians = Number(input[0]);
    let degrees = radians * 180 / Math.PI;
    console.log(degrees.toFixed(2)); //toFixed 2 = 2 symbols after ,
}
radiansToDegrees(['3.1416'])