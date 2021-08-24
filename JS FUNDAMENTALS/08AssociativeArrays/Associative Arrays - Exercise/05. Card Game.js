function cardGame(input) {
    let power = {
        J: 11,
        Q: 12,
        K: 13,
        A: 14
    };
    let type = {
        S: 4,
        H: 3,
        D: 2,
        C: 1
    };
    let players = {};

    for (let el of input) {
        let [currentPlayer, cards] = el.split(': ')
        cards = cards.split(', ');
        if (!players.hasOwnProperty(currentPlayer)) {
            players[currentPlayer] = cards;
        } else {
            players[currentPlayer] = players[currentPlayer].concat(cards);
        }

    }
    for (let el in players) {
        players[el] = new Set(players[el]);

        let points = 0
        for (let card of players[el]) {
            card = card.split('');
            let symbol = card.pop();
            let cardNum = card.join('');
            if (power.hasOwnProperty(cardNum)) {
                points += power[cardNum] * type[symbol];
            } else {
                points += Number(cardNum) * type[symbol];
            }
        }
        players[el] = points;

    }
    for (let [player, value] of Object.entries(players)) {
        console.log(`${player}: ${value}`);
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);