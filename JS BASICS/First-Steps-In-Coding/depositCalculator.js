function depositCalculator(input) {

    let depositAmount = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let rentesats = Number(input[2]);

    let totalRentesats = depositAmount * (rentesats / 100);
    let monthlyRentesats = totalRentesats / 12;

    let totalAmount = depositAmount + (depositPeriod * monthlyRentesats);

    console.log(totalAmount);
}
depositCalculator(['200', '3', '5.7']);
////////////////////////////////////////////////////////////////////////////////////////////////////////////
function depositSum(input) {
    let sum = Number(input[0])
    let time = Number(input[1])
    let yearSum = Number(input[2])
    let finalPrice = sum + (time * ((sum * (yearSum / 100)) / 12))

    console.log(finalPrice)
}

depositSum(["200", "3", "5.7"])