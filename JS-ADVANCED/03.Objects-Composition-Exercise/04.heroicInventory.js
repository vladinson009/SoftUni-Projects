function heroicInventory(input) {
  let myHeroes = [];

  for (let each of input) {
    let [name, level, items] = each.split(" / ");
    level = Number(level);
    items = items ? items.split(", ") : [];
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
