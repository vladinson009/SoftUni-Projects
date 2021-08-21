function weddingSeats(input) {

    let lastSector = input[0].charCodeAt(); // Last Sector Number
    let rowsInFirstSector = Number(input[1]); // ROWS 1
    let seatsInOddRow = Number(input[2]);
    let seatsInEvenRow = seatsInOddRow + 2;
    let firstSector = 'A'.charCodeAt() // FIRST SECTOR NUMBER
    // let firstSectorCode = String.fromCharCode(firstSector) // FIRST SECTOR A
    // let lastSectorCode = String.fromCharCode(lastSector) // LAST SECTOR B
    let totalSeats = 0;
    let counter = 0;
    for (let sector = firstSector; sector <= lastSector; sector++) {
        for (let rows = 1; rows <= rowsInFirstSector; rows++) {

            if (rows % 2 === 0) {
                totalSeats = seatsInEvenRow;
            } else {
                totalSeats = seatsInOddRow;
            }
            for (let seats = 0; seats < totalSeats; seats++) {
                let currentSeat = 'a'.charCodeAt() + seats;
                console.log(`${String.fromCharCode(sector)}${rows}${String.fromCharCode(currentSeat)}`);
                counter++;
            }
        }
        rowsInFirstSector++;
    }
    console.log(counter);
}
weddingSeats(['B', '3', '2']);