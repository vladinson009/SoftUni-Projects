function worldSwimmingRecord(input) {

    let recordSec = Number(input[0]);
    let distanceM = Number(input[1]);
    let timeForOneMeter = Number(input[2]);

    let distanceInSec = distanceM * timeForOneMeter;
    let additionalTime = Math.floor(distanceM / 15) * 12.5;


    let totalTime = distanceInSec + additionalTime;

    if (totalTime >= recordSec) {
        console.log(`No, he failed! He was ${(totalTime - recordSec).toFixed(2)} seconds slower.`);
    } else if (totalTime < recordSec) {
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
}
worldSwimmingRecord(["10464", "1500", "20"])
worldSwimmingRecord(["55555.67", "3017", "5.03"])