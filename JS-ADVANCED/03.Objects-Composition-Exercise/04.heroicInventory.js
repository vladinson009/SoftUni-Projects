function heroicInventory(input) {
  let myHeroes = [];

  for (let each of input) {
    const tokens = each.split(" / ");
    const name = tokens[0];
    const level = tokens[1];
    let items = [];
    if (tokens.length > 2) {
      items = tokens[2].split(", ");
    }
    let currentHero = {
      name,
      level,
      items,
    };

    myHeroes.push(currentHero);
  }
  return JSON.stringify(myHeroes);
}
console.log(
  heroicInventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
  ])
);
