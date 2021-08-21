function harvest(input) {
    let x = Number(input[0]); // X кв.м е лозето 
    let y = Number(input[1]); //Y грозде за един кв.м 
    let z = Number(input[2]); //Z нужни литри вино / Желаното количество вино
    let workers = Number(input[3]);

    let produceOfWine = x * y; //общо грозде
    let wine = 0.4 * produceOfWine / 2.5; //вино
    let wineAdvantage = wine - z; //остатък вино
    let winePerWorker = wineAdvantage / workers; //вино за работник

    if(wine >= z) {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.
${Math.ceil(wineAdvantage)} liters left -> ${Math.ceil(winePerWorker)} liters per person.`);
    }
    else if(wine <= z) {
        console.log(`It will be a tough winter! More ${Math.floor(Math.abs(z - wine))} liters wine needed.`);
    }

}  
harvest(['650', '2', '175', '3'])

