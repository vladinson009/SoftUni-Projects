function onTime(input) {
    let hourExam = Number(input[0]);
    let minuteExam = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);

    let totalMinExam = hourExam * 60 + minuteExam;
    let totalArrivalMin = arrivalHour * 60 + arrivalMinute;

    let difference = Math.abs(totalArrivalMin - totalMinExam);
    let hourDifference = Math.floor(difference / 60);
    let minDifference = difference % 60;
    if (difference < 60) {
        if (totalMinExam === totalArrivalMin) {
            console.log('On time');
        } else if (totalMinExam > totalArrivalMin && difference <= 30) {
            console.log('On time');
            console.log(`${minDifference} minutes before the start`)
        } else if (totalMinExam > totalArrivalMin) {
            console.log('Early');
            console.log(`${minDifference} minutes before the start`)
        } else if (totalMinExam < totalArrivalMin) {
            console.log('Late');
            console.log(`${minDifference} minutes after the start`)
        }
    } else if (difference >= 60) {
        if (totalMinExam > totalArrivalMin) {
            if (minDifference < 10) {
                console.log('Early');
                console.log(`${hourDifference}:0${minDifference} hours before the start`);
            } else {
                console.log('Early');
                console.log(`${hourDifference}:${minDifference} hours before the start`);
            }
        } else if (totalMinExam < totalArrivalMin) {
            if (minDifference < 10) {
                console.log('Late');
                console.log(`${hourDifference}:0${minDifference} hours after the start`);
            } else {
                console.log('Late');
                console.log(`${hourDifference}:${minDifference} hours after the start`);
            }
        }
    }
}
onTime(["9", "30", "9", "50"]);
onTime(["9", "00", "8", "30"])
onTime(["16", "00", "15", "00"])