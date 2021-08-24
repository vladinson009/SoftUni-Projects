function arenaTier(input) {

    let myHeroes = {};
    let totalSkills = {};
    for (let line of input) {
        if (line.includes(' -> ')) {
            let [hero, skill, skillValue] = line.split(' -> ');
            skillValue = Number(skillValue);

            if (!myHeroes.hasOwnProperty(hero)) {
                myHeroes[hero] = {};
            }
            if (!myHeroes[hero].hasOwnProperty(skill) || (myHeroes[hero][skill] < skillValue)) {
                myHeroes[hero][skill] = skillValue;
            }

            if (!totalSkills.hasOwnProperty(hero)) {
                totalSkills[hero] = 0
            }
            for (let totalHero in totalSkills) {
                totalSkills[totalHero] = Object.values(myHeroes[totalHero]).reduce((a, b) => a + b, 0)
            }
        } else if (line.includes(' vs ')) {

            let [firstHero, secondHero] = line.split(' vs ');
            if (myHeroes.hasOwnProperty(firstHero) && myHeroes.hasOwnProperty(secondHero)) {

                for (let key in myHeroes[firstHero]) {
                    let isMatch = false;
                    for (let secondKey in myHeroes[secondHero]) {

                        if (key === secondKey) {
                            isMatch = true;
                            if (totalSkills[firstHero] > totalSkills[secondHero]) {
                                delete totalSkills[secondHero];
                                delete myHeroes[secondHero];
                            } else {
                                delete totalSkills[firstHero];
                                delete myHeroes[firstHero];
                            }
                            break;
                        }

                    }
                    if (isMatch) break;
                }
            }

        } else {
            break;
        }
    }
    let sortedHeroes = Object.entries(totalSkills)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    for (let sortedHero of sortedHeroes) {
        let theHero = sortedHero[0];
        let totalPoints = sortedHero[1];
        console.log(`${theHero}: ${totalPoints} skill`);
        Object.entries(myHeroes[theHero])
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
            .forEach((value, index) => console.log(`- ${value[0]} <!> ${value[1]}`))

    }
}
arenaTier(['Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',
    'Ave Cesar'
]);