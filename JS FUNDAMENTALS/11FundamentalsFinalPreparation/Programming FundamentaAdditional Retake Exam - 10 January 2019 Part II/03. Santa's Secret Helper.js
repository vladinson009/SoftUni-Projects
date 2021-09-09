function santaHelper(input) {
    let pattern = /@(?<name>[A-Za-z]+)[^@\-!:>]+!(?<status>[GN])!/;
    let n = Number(input.shift());
    let goodKids = [];
    while (input[0] != 'end') {
        let token = input.shift();
        let currentText = '';

        for (let each of token) {
            let currentCharCode = each.charCodeAt(0);
            let currentLetter = String.fromCharCode(currentCharCode - n);
            currentText += currentLetter;
        }
        let match = pattern.exec(currentText);

        if (match != null && match[2] == 'G') {
            goodKids.push(match[1]);

        }
    }
    goodKids.forEach(kid => console.log(kid))
}
santaHelper(['4',
    '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%',
    '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf',
    ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%',
    'Wonvfkmwzkmpwvzkm\'lhjnlDWeqerxle0wlnzj{nz%K%nohwn',
    'DReh}e=<4lhzj1%K%',
    'end'
]);