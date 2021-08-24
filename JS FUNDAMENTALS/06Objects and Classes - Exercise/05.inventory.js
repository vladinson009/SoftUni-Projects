function inventory(heroList) {
    let allHeroes = [];
    for (let currentHero of heroList) {
        let tokens = currentHero.split(' / ');
        let name = tokens[0];
        let level = Number(tokens[1]);
        let items = tokens[2].split(', ');

        let heroObject = {
            name,
            level,
            items,
        };
        allHeroes.push(heroObject);
    }
    allHeroes.sort((a, b) => a.level - b.level);

    for (let printHero of allHeroes) {

        console.log(`Hero: ${printHero.name}`);
        console.log(`level => ${printHero.level}`);
        console.log(`items => ${printHero.items.sort((a, b) => a.localeCompare(b)).join(', ')}`);
    }
}
inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
])