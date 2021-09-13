function previousDay(year, month, day) {

    let date = new Date(year, month - 1, day - 1);
    let newYear = date.getFullYear();
    let newMonth = date.getMonth() + 1;
    let newDay = date.getDate();

    return `${newYear}-${newMonth}-${newDay}`
}
console.log(previousDay(2016, 9, 30));