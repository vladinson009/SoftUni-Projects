function skeleton(input) {

    let minOfControl = Number(input[0]);
    let secOfControl = Number(input[1]);
    let lengthInM = Number(input[2]);
    let secForHundredMeters = Number(input[3]);

    let controlInSec = minOfControl * 60 + secOfControl;
    let timeDelay = (lengthInM / 120) * 2.5;
    let timeOfMarin = (lengthInM / 100) * secForHundredMeters - timeDelay;

    if (timeOfMarin <= controlInSec) {
        console.log('Marin Bangiev won an Olympic quota!');
        console.log(`His time is ${timeOfMarin.toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${(timeOfMarin - controlInSec).toFixed(3)} second slower.`)
    }
}
skeleton(["2", "12", "1200", "10"])