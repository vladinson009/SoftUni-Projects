function grassing(input) {
    let grassingArea = Number(input[0]);
    let price = grassingArea * 7.61;
    let discount = price * 0.18;

    console.log(`The final price is: ${price - discount} lv.`);
    console.log(`The discount is: ${discount} lv.`)

}
grassing(['550'])