function transportPrice(input) {



    let nKilometars = Number(input[0]);

    let kindTrip = input[1];

    let taxiPriceDay = 0.70 + (nKilometars * 0.79);

    let taxiPriceNight = 0.70 + nKilometars * 0.90;

    let busPrice = 0.09 * nKilometars;

    let trainPrice = 0.06 * nKilometars;



    if (nKilometars < 20) {



        console.log(taxiPriceDay.toFixed(2));



    } else if (nKilometars < 20) {



        console.log(taxiPriceNight.toFixed(2));




    } else if (nKilometars >= 20) {

        console.log(busPrice.toFixed(2));



    } else if (nKilometars <= 100) {



        console.log(trainPrice.toFixed(2));

    }




}

transportPrice(['7', 'day'])