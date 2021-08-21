function vacation(input) {

    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysToFinish = Number(input[2]);

    let totalTimeforReading = pages / pagesPerHour;
    let result = totalTimeforReading / daysToFinish;

    console.log(result);
}
vacation(['432', '15', '4'])