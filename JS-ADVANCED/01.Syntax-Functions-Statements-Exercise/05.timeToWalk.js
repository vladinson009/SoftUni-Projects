function timeToWalk(steps, footprintMeter, speedKmH) {

    let distanceMeter = steps * footprintMeter;
    let speedKmMeter = speedKmH * 1000;
    let breaks = Math.floor(distanceMeter / 500)

    let timeInHours = distanceMeter / speedKmMeter;

    let hours = String(Math.trunc(timeInHours)).padStart(2, '0');
    let minutes = String(Math.trunc(timeInHours * 60) + breaks).padStart(2, '0');
    let sec = String(Math.round((timeInHours * 60 * 60) % 60)).padStart(2, '0');

    return `${hours}:${minutes}:${sec}`
}

console.log(timeToWalk(4000, 0.60, 5));