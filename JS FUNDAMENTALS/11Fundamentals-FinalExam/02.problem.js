function solve(input) {
    let pattern = /([*@])(?<tag>[A-Z][a-z]{2,})\1:\s(?<first>\[[A-Za-z]\])\|(?<second>\[[A-Za-z]\])\|(?<third>\[[A-Za-z]\])\|$/;

    let n = Number(input.shift());

    let match = pattern.exec(input.shift());
    for (let i = 0; i < n; i++) {
        if (match == null) {
            console.log('Valid message not found!');
        } else {
            let one = match.groups.first.charCodeAt(1);
            let two = match.groups.second.charCodeAt(1);
            let three = match.groups.third.charCodeAt(1);
            console.log(match.groups.tag + ': ' + one, two, three);
        }
        match = pattern.exec(input.shift());
    }
}

solve(["3",
    "*Request*: [I]|[s]|[i]|",
    "*Taggy@: [73]|[73]|[73]|",
    "Should be valid @Taggy@: [v]|[a]|[l]|"
])