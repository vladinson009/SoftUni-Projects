function timeMinutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]) + 15;

    if (minutes >= 60) {
        minutes = minutes % 60;
        hours += 1
    }
    if (hours >= 24) {
        hours = hours % 24;
    }
    if (minutes > 9) {
        console.log(`${hours}:${minutes}`);
    } else {
        console.log(`${hours}:0${minutes}`)
    }
}
timeMinutes(["1", "46"])
timeMinutes(["0", "01"])
timeMinutes(["23", "59"])
timeMinutes(["11", "08"])
timeMinutes(["12", "49"])

