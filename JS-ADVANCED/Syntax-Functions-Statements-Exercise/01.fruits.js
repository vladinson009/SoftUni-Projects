function fruits(typeFruit, weightG, priceKg) {

    let weightKg = weightG / 1000;
    let totalPrice = weightKg * priceKg;

    return `I need $${totalPrice.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${typeFruit}.`
}
console.log(fruits('orange', 2500, 1.80));