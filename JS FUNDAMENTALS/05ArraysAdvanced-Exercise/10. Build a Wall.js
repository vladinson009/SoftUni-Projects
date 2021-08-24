function buildAWall(input) {
    let walls = input.map(Number);
    let concernePerDay = [];
    let totalConcerne = 0;

    for (let i = 0;; i++) {
        let concerne = 0;
        let allDone = 0

        for (let j = 0; j < walls.length; j++) {
            let currentWall = walls[j];
            if (currentWall < 30) {
                walls[j]++;
                concerne += 195;
            } else {
                allDone++
            }
            if (concerne !== 0) {
                concernePerDay[i] = concerne;
            }
        }
        totalConcerne += concerne;

        if (allDone === walls.length) {
            break
        }

    }
    console.log(concernePerDay.join(', '));
    console.log(totalConcerne * 1900 + ' pesos');


}
buildAWall([17, 22, 17, 19, 17]);