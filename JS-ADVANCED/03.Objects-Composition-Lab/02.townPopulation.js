function townPopulation(input) {
    const myObj = {};

    for (let city of input) {
        city = city.split(' <-> ');
        const town = city[0];
        const population = Number(city[1]);

        if (!myObj.hasOwnProperty(town)) {
            myObj[town] = 0;
        }
        myObj[town] += population
    }
    for (let key in myObj) {
        console.log(`${key} : ${myObj[key]}`);
    }
}

townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);