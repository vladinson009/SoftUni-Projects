function meetings(input) {

    let appointments = {};
    for (let el of input) {
        let tokens = el.split(' ');
        let day = tokens[0];
        let name = tokens[1];

        if (appointments.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            appointments[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (let day in appointments) {
        console.log(`${day} -> ${appointments[day]}`);
    }

}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
])