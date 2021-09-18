function previousDay(year, month, day) {

    let date = new Date(year, month, day);
    let newYear = date.getFullYear();
    let newMonth = date.getMonth();
    let newDay = date.getDate();
    console.log(date);
    return `${newYear}-${newMonth}-${newDay}`
}
console.log(previousDay(2016, 1, 30));