function trainingLab(input) {
    let w = Number(input[0]);
    let h = Number(input[1]);

    if (3 <= h && h <= w && w <= 100) {
        w *= 100;
        h *= 100;
        let corridorH = Number('100');
        let usedH = h - corridorH;

        let workingPlaceW = Number('120');
        let workingplaceH = Number('70');

        let desksAmount = Math.trunc(usedH / workingplaceH);
        let rows = Math.trunc(w / workingPlaceW);

        let totalResult = rows * desksAmount - 3;

        console.log(totalResult);
    }
}
trainingLab(['15', '8.9'])
trainingLab(['8.4', '5.2'])