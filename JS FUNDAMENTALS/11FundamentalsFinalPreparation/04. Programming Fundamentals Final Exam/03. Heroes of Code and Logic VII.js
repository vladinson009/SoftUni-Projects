function heroesOfCode(input) {
    let n = Number(input.shift());
    let myHeroes = {};
    let myCommands = {
        'CastSpell': castSpell,
        'TakeDamage': takeDamage,
        'Recharge': recharge,
        'Heal': heal
    };
    for (let i = 0; i < n; i++) {
        let tokens = input.shift().split(' ');
        let name = tokens[0];
        let hp = Number(tokens[1]);
        let mp = Number(tokens[2]);

        myHeroes[name] = {
            hp,
            mp
        }
    }
    while (input[0] != 'End') {
        let tokens = input.shift().split(' - ');
        let command = tokens.shift();
        let action = myCommands[command];
        action(...tokens);
    }

    let sortedHeroes = Object.entries(myHeroes).sort(sorting);

    for (let each of sortedHeroes) {
        console.log(`${each[0]}`);
        console.log(`  HP: ${each[1].hp}`);
        console.log(`  MP: ${each[1].mp}`);
    }

    function castSpell(heroName, mpNeeded, spellName) {
        mpNeeded = Number(mpNeeded);
        if (myHeroes[heroName].mp >= mpNeeded) {
            myHeroes[heroName].mp -= mpNeeded;
            console.log(`${heroName} has successfully cast ${spellName} and now has ${myHeroes[heroName].mp} MP!`);
        } else {
            console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
        }
    };

    function takeDamage(heroName, dmg, attacker) {
        dmg = Number(dmg);
        myHeroes[heroName].hp -= dmg;
        if (myHeroes[heroName].hp > 0) {
            console.log(`${heroName} was hit for ${dmg} HP by ${attacker} and now has ${myHeroes[heroName].hp} HP left!`);
        } else {
            console.log(`${heroName} has been killed by ${attacker}!`);
            delete myHeroes[heroName];
        }

    };

    function recharge(heroName, amount) {
        amount = Number(amount);

        if (myHeroes[heroName].mp + amount <= 200) {
            myHeroes[heroName].mp += amount;

        } else {
            amount = 200 - myHeroes[heroName].mp;
            myHeroes[heroName].mp = 200;
        }
        console.log(`${heroName} recharged for ${amount} MP!`);
    };

    function heal(heroName, amount) {
        amount = Number(amount);
        if (myHeroes[heroName].hp + amount <= 100) {
            myHeroes[heroName].hp += amount;

        } else {
            amount = 100 - myHeroes[heroName].hp;
            myHeroes[heroName].hp = 100;
        }
        console.log(`${heroName} healed for ${amount} HP!`);
    };

    function sorting(a, b) {
        let hpA = a[1].hp;
        let hpB = b[1].hp;

        let nameA = a[0];
        let nameB = b[0];
        return (hpB - hpA) || (nameA.localeCompare(nameB))
    };
}
heroesOfCode(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]);