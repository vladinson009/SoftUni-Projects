function loadingBar(percents) {

    function bar(number) {
        let percents = number / 10;
        let string = '[..........]';
        let stringSplit = string.split('')
        for (let i = 1; i <= percents; i++) {
            stringSplit[i] = '%'
        }
        stringSplit = stringSplit.join('')
        return stringSplit;
    }
    let loadingBar = bar(percents);

    if (percents === 100) {
        console.log('100% Complete!\n[%%%%%%%%%%]');
    } else {
        console.log(`${percents}% ${loadingBar}\nStill loading...`);
    }
}
loadingBar(100)