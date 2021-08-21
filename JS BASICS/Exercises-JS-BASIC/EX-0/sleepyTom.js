function sleepyTom(input) {
    let dayOff = Number(input[0]);
    let dayOffplay = 127;

    let workDaysPlay = 63;
    let workDays = 365 - dayOff;

    let normOfPlay = 30000;
    let realPlay = (workDays * workDaysPlay + dayOff * dayOffplay);

    let differenceFromNorm = (normOfPlay - realPlay) / 60;
    let differenceHours = Math.floor(differenceFromNorm);
    let minutes = Math.round((differenceFromNorm - differenceHours) * 60);

    if (realPlay < normOfPlay) {
        console.log(`Tom sleeps well
${differenceHours} hours and ${minutes} minutes less for play`);
    } else if (realPlay > normOfPlay) {
        differenceHours = Math.ceil(differenceFromNorm);
        minutes = Math.round((differenceFromNorm - differenceHours) * 60);
        console.log(`Tom will run away
${Math.abs(differenceHours)} hours and ${Math.abs(minutes)} minutes more for play`);
    }

}
sleepyTom(['113'])