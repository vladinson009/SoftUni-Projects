function letters(input) {
    let firstLetter = input[0];
    let lastLetter = input[1];
    let notAllowedLetter = input[2];

    let first = firstLetter.charCodeAt();
    let last = lastLetter.charCodeAt();
    let notAllowed = notAllowedLetter.charCodeAt();
    let counter = 0;
    let printLine = '';
    for (let i = first; i <= last; i++) {
        for (let j = first; j <= last; j++) {
            for (let k = first; k <= last; k++) {
                if (i !== notAllowed && j !== notAllowed && k !== notAllowed) {
                    counter++
                    printLine += `${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(k)} `
                }
            }
        }
    }
    console.log(printLine + counter);
}
letters(['f', 'k', 'h'])