function solve(input) {
    let pattern = /^([$%])([A-Z][a-z]{2,})\1:\s\[([0-9]+)\]\|\[([0-9]+)\]\|\[([0-9]+)\]\|$/
    let n = Number(input.shift());


    for (let i = 0; i < n; i++) {
        let currentRow = input[i]
        let match = pattern.exec(currentRow)

        if (match !== null) {
            let name = match[2];
            let first = Number(match[3]);
            let second = Number(match[4]);
            let third = Number(match[5]);
            let msg = String.fromCharCode(first) + String.fromCharCode(second) + String.fromCharCode(third);
            console.log(`${name}: ${msg}`);
        } else {
            console.log('Valid message not found!');
        }

    }



}
solve(["4",
    "$Request$: [73]|[115]|[105]|",
    "%Taggy$: [73]|[73]|[73]|",
    "%Taggy%: [118]|[97]|[108]|",
    "$Request$: [73]|[115]|[105]|[32]|[75]|"
])