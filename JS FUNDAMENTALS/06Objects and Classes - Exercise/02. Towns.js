function towns(cityList) {
    let citiesInfo = [];
    for (let townInfo of cityList) {
        let tokens = townInfo.split(' | ');
        let town = tokens[0];
        let latitude = Number(tokens[1]).toFixed(2);
        let longitude = Number(tokens[2]).toFixed(2);

        let cityObject = {
            town,
            latitude,
            longitude,
        }
        citiesInfo.push(cityObject);

    }
    for (let key of citiesInfo) {
        console.log(key);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
])