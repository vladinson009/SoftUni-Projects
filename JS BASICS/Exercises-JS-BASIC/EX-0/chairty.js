function chairty(input) {
    let days = Number(input[0]);
    let pastryCooker = Number(input[1]);
    let cakes = Number(input[2] * 45);
    let waffels = Number(input[3] * 5.8);
    let pancakes = Number(input[4] * 3.2);
    let perDay = (cakes + waffels + pancakes) * pastryCooker;
    let totalAmount = perDay * days;
    let result = totalAmount - totalAmount / 8;

    console.log(result)
}
chairty(['23', '8', '14', '30', '16'])