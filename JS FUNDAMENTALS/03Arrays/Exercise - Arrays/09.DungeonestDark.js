function dungeonesDark(list) {
    let health = 100;
    let coins = 0;
    let options = list.toString().split('|');


    for (let i = 0; i < options.length; i++) {
        let currentRoom = options[i];
        if (currentRoom.includes('potion')) {
            currentRoom = currentRoom.split(' ');
            if ((health + Number(currentRoom[1]) < 100)) {
                health += Number(currentRoom[1]);
                console.log(`You healed for ${Number(currentRoom[1])} hp.`);
                console.log(`Current health: ${health} hp.`);
            } else {
                console.log(`You healed for ${100 - health} hp.`);
                health = 100;
                console.log(`Current health: ${health} hp.`);
            }

        } else if (currentRoom.includes('chest')) {
            currentRoom = currentRoom.split(' ');
            console.log(`You found ${Number(currentRoom[1])} coins.`);
            coins += Number(currentRoom[1])

        } else {
            currentRoom = currentRoom.split(' ');
            health -= Number(currentRoom[1]);
            if (health > 0) {
                console.log(`You slayed ${currentRoom[0]}.`);
            } else {
                console.log(`You died! Killed by ${currentRoom[0]}.`);
                console.log(`Best room: ${i+1}`);
                return;
            }
        }
    }
    console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`);
}
dungeonesDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])