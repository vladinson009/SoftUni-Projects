function solve(input) {
    function add(name, health, energy) {
        health = Number(health);
        energy = Number(energy);
        if (people[name] == undefined) {
            people[name] = {
                health,
                energy,
            }
        } else {
            people[name].health += Number(health);
        }
    }

    function attack(attacker, defender, dmg) {
        if (people[attacker] != undefined && people[defender] != undefined) {
            people[defender].health -= Number(dmg);
            people[attacker].energy -= 1;
            if (people[defender].health <= 0) {
                delete people[defender];
                console.log(`${defender} was disqualified!`);
                if (people[attacker].energy <= 0) {
                    delete people[attacker];
                    console.log(`${attacker} was disqualified!`);
                }
            } else {
                if (people[attacker].energy <= 0) {
                    delete people[attacker];
                    console.log(`${attacker} was disqualified!`);
                }
            }
        }
    }

    function erease(userName) {
        if (userName == 'All') {
            people = {};
        } else if (people[userName] != undefined) {
            delete people[userName];
        }
    }

    let people = {};

    while (input[0] != 'Results') {
        let [command, name, ...args] = input.shift().split(':');
        if (command == 'Add') {
            add(name, args[0], args[1]);
        } else if (command == 'Attack') {
            attack(name, args[0], args[1]);
        } else if (command == 'Delete') {
            erease(name);
        }
    }
    let count = Object.keys(people).length;
    console.log('People count: ' + count);
    let sorted = Object.entries(people).sort(compare);

    function compare(a, b) {
        let healthA = a[1].health;
        let healthB = b[1].health;

        return healthB - healthA || a[0].localeCompare(b[0]);
    }
    for (const [name, {
            health,
            energy
        }] of sorted) {
        console.log(`${name} - ${health} - ${energy}`);
    }
}
solve(["Add:Mark:1000:5",
    "Add:Clark:1000:2",
    "Attack:Clark:Mark:500",
    "Attack:Clark:Mark:800",
    "Add:Charlie:4000:10",
    "Results"
])