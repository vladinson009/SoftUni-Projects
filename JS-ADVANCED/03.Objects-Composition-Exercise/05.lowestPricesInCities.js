function lowestPrices(input) {
  let myCities = {};

  for (let each of input) {
    let [town, product, price] = each.split(" | ");
    price = Number(price);

    if (myCities[product] == undefined) {
      myCities[product] = {};
    }
    myCities[product][town] = price;
  }
  for (const key in myCities) {
    const sorted = Object
      .entries(myCities[key])
      .sort((a, b) => a[1] - b[1]);
    console.log(`${key} -> ${sorted[0][1]} (${sorted[0][0]})`);
  }
}
lowestPrices([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);