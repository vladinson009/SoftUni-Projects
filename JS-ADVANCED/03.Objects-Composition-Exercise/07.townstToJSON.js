function townsToJson(input) {
    const result = [];
    const [town, latitude, longitude] = input.shift()
        .slice(2, -2)
        .split(' | ');
    for (let each of input) {
        let [currentTown, currentLatitude, currentLongitude] = each
            .slice(2, -2)
            .split(' | ');
        currentLatitude = Number(Number(currentLatitude).toFixed(2));
        currentLongitude = Number(Number(currentLongitude).toFixed(2));
        let obj = {
            [town]: currentTown,
            [latitude]: currentLatitude,
            [longitude]: currentLongitude
        }
        result.push(obj);
    }
    return JSON.stringify(result);
}
townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);