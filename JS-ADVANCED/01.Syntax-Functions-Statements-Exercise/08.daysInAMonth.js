function daysInAMonth(month, year) {
    let date = new Date(year, month, 0).getDate();
    console.log(date);

}
daysInAMonth(1, 2020)