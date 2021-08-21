function grassing(input) {
    let totallArea = input[0];
    let SquareMeterPrice = 7.61;
    let discount = 0.18;
    let price = totallArea * SquareMeterPrice;
    let priceDiscount = discount * price;
    let finalPrice = `Final Price: ${price - priceDiscount} lv`;
    let discountResult = `Discount: ${priceDiscount} lv`;
    let priceBefore = `Price: ${price}`;

    console.log(priceBefore);
    console.log(discountResult);
    console.log(finalPrice);

}

grassing([400])