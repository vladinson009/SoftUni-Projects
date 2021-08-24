function arenaTier(input) {
    let myHeroes = {};
    let totalSkills = {};

    for (let current of input) {
        if (current.includes(' -> ')) {
            let [hero, technique, skill] = current.split(' -> ');
            skill = Number(skill);
            if (!myHeroes.hasOwnProperty(hero)) {
                myHeroes[hero] = {};
            }
            if (!myHeroes[hero].hasOwnProperty(technique)) {
                myHeroes[hero][technique] = 0;
            }
            if (myHeroes[hero][technique] < skill) {
                myHeroes[hero][technique] = skill;


            }

            if (!totalSkills.hasOwnProperty(hero)) {
                totalSkills[hero] = 0;
            }




        } else if (current.includes(' vs ')) {
            let [firstHero, secondHero] = current.split(' vs ');

            if (myHeroes.hasOwnProperty(firstHero) && myHeroes.hasOwnProperty(secondHero)) {

                for (let keys in myHeroes[firstHero]) {
                    let isMatch = false
                    for (let secondKeys in myHeroes[secondHero]) {
                        if (keys === secondKeys) {
                            isMatch = true;
                            if (totalSkills[firstHero] < totalSkills[secondHero]) {
                                delete myHeroes[firstHero];
                                delete totalSkills[firstHero];
                            } else {
                                delete myHeroes[secondHero];
                                delete totalSkills[secondHero];

                            }
                            break;
                        }
                    }
                    if (isMatch) {
                        break;
                    }
                }
            }

        } else if (current === 'Ave Cesar') {
            break;
        }
    }


    let sortedTotalSkills = Object.entries(totalSkills)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    for (let sortMax of sortedTotalSkills) {

        console.log(`${sortMax[0]}: ${sortMax[1]} skill`);
        let currentSkills = Object.entries(myHeroes[sortMax[0]])
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))

        for (let item of currentSkills) {
            console.log(`- ${item[0]} <!> ${item[1]}`);

        }

    }

}

arenaTier([
    'zz -> Duck -> 700',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);