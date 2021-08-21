function school(input) {

    let packagePen = Number(input[0]);
    let packageMarker = Number(input[1]);
    let literChemical = Number(input[2]);
    let discount = Number(input[3]);

    let penPrice = 5.8;
    let markerPrice = 7.2;
    let chemicalPrice = 1.2;

    let totalPen = packagePen * penPrice;
    let totalMarker = packageMarker * markerPrice;
    let totalChemical = literChemical * chemicalPrice;

    let totalMoney = totalPen + totalMarker + totalChemical
    let result = totalMoney - (totalMoney * discount / 100);

    console.log(result.toFixed(3));
}
school(["2", "3", "2.5", "25"])