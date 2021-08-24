function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armourPrice) {
    let brokenHelmet = 0;
    let brokenSword = 0;
    let brokenShield = 0;
    let brokenArmour = 0;
    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 == 0) {
            brokenHelmet++;
        }
        if (i % 3 == 0) {
            brokenSword++;
        }
        if (i % 2 == 0 && i % 3 == 0) {
            brokenShield++;
            if (brokenShield % 2 == 0) {
                brokenArmour++;
            }
        }
    }
    let expenses = brokenHelmet * helmetPrice + brokenSword * swordPrice + brokenShield *
        shieldPrice + brokenArmour * armourPrice
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200)