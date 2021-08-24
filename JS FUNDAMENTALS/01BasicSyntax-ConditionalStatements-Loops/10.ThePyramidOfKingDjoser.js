function thePyramidOfKingDjoser(base, increment) {
    let theHeight = 0;
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let rows = 0;
    let currentBase = base;

    while (currentBase > 2) {
        let stones = (currentBase - 2) * (currentBase - 2);
        let marbleLapis = currentBase * currentBase - stones
        totalStone += stones * increment;
        rows++;

        if (rows % 5 === 0) {
            totalLapis += marbleLapis * increment;
        } else {
            totalMarble += marbleLapis * increment;
        }
        theHeight += increment;
        currentBase -= 2;
    }
    theHeight += increment;
    let gold = currentBase * currentBase * increment

    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(theHeight)}`);
}
thePyramidOfKingDjoser(12, 1)