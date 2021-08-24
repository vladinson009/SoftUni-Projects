function muOnline(input) {
    let commands = input.split('|');

    let health = 100;
    let bitcoins = 0;
    countRoom = 0;

    for (let tokens of commands) {
        tokens = tokens.split(' ');
        let [room, value] = tokens;
        value = Number(value);
        countRoom++

        switch (room) {

            case 'potion':
                if (health + value <= 100) {
                    health += value;
                    console.log(`You healed for ${value} hp.`);
                } else {
                    console.log(`You healed for ${100 - health} hp.`);
                    health = 100;
                }
                console.log(`Current health: ${health} hp.`);
                break;

            case 'chest':
                console.log(`You found ${value} bitcoins.`);
                bitcoins += value;
                break;
            default:
                if (health - value > 0) {
                    console.log(`You slayed ${room}.`);
                    health -= value;
                } else {
                    console.log(`You died! Killed by ${room}.`);
                    console.log(`Best room: ${countRoom}`);
                    return;
                }
                break;
        }

    }
    console.log('You\'ve made it!');
    console.log(`Bitcoins: ${bitcoins}`);
    console.log(`Health: ${health}`);
}

muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000')