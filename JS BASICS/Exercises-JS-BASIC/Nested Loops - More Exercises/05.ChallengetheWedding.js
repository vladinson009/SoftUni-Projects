function challengetheWedding(input) {

    let men = Number(input[0]);
    let women = Number(input[1]);
    let table = Number(input[2]);

    let customers = 0;
    let printLine = '';
    let fullTable = false;
    for (let m = 1; m <= men; m++) {
        for (let w = 1; w <= women; w++) {
            customers += 2
            printLine = printLine + `(${m} <-> ${w}) `
            if (customers / 2 >= table) {
                fullTable = true;
                break;
            }
        }
        if (fullTable) {
            break;
        }
    }
    console.log(printLine);
}
challengetheWedding(['2', '2', '3']);