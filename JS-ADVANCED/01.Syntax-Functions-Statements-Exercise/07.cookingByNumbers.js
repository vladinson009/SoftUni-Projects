function cookingByNumbers(num, one, two, three, four, five) {
    num = Number(num);
    const operations = [one, two, three, four, five];
    const actions = {
        chop,
        dice,
        spice,
        bake,
        fillet
    }

    for (let operation of operations) {
        let command = actions[operation];
        command(num);
        console.log(num);
    }



    function chop(n) {
        n = n / 2;
        return num = n;
    }

    function dice(n) {
        n = Math.sqrt(n);
        return num = n;

    }

    function spice(n) {
        n++;
        return num = n;

    }

    function bake(n) {
        n *= 3;
        return num = n;

    }

    function fillet(n) {
        n *= 0.8;
        return num = n;

    }
}
//cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');