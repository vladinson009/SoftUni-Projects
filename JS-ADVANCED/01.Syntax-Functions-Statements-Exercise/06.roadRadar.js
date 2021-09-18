function roadRadar(speed, area) {
    speed = Number(speed);
    let speedLimit = 0;

    const motorway = 130;
    const interstate = 90;
    const city = 50;
    const residential = 20;

    switch (area) {
        case 'motorway':
            speedLimit = motorway;
            break;
        case 'interstate':
            speedLimit = interstate;;
            break;
        case 'city':
            speedLimit = city;;
            break;
        case 'residential':
            speedLimit = residential;;
            break;
    }

    if (speed > speedLimit) {
        let status = '';
        const difference = speed - speedLimit;
        if (difference <= 20) {
            status = 'speeding';
        } else if (difference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }

}
roadRadar(40, 'city')
roadRadar(200, 'motorway')