function blackFlag(input) {
    let days = Number(input[0]);
    let plunder = Number(input[1]);
    let expected = Number(input[2]);

    let totalPlunder = 0;

    for (let i = 1; i <= days; i++) {
        if (i % 3 === 0) {
            totalPlunder += plunder * 1.5;
        } else {
            totalPlunder += plunder;
        }

        if (i % 5 === 0) {
            totalPlunder *= 0.7
        }

    }
    let percentage = totalPlunder / expected * 100;

    if (totalPlunder >= expected) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }

}

blackFlag((["10",
    "20",
    "380"
]))