function demo(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]) + 15;
    if (minutes >= 60) {
        minutes = minutes - 60;
        hours =  hours + 1;

    }
    if (hours >= 24) {
        hours = hours - 24;
    }
    if (minutes > 9) {
        console.log(`${hours}:${minutes}`);
    } else {
        console.log(`${hours}:0${minutes}`)
    }
}
demo(['1', '66']) // час, минути + 15