function netxDay(year, month, day) {

    let thisDay = new Date(year, month-1, day+1);

    let newYear = thisDay.getFullYear();
    let newMonth = thisDay.getMonth();
    let newDate = thisDay.getDate();

    console.log(`${newYear}-${newMonth+1}-${newDate}`);

}
netxDay(2016, 9, 30)

// function birthday(year, month, day) {
//     let today = new Date()
//     let birthday = new Date(year, month, day)

//     let birthYear = birthday.getFullYear();
//     let birthMonth = birthday.getMonth();
//     let birthDay = birthday.getDate();
//     let theDate = `${birthYear}-${birthMonth}-${birthDay}`
//     console.log(today);
//     console.log('================================');    
//     console.log(theDate);
// }
// birthday(1995,5,28)