function emojiDetector(input) {
    let text = input[0];
    let emojiPattern = /([:]{2}|[*]{2})([A-Z][a-z]{2,})\1/g;
    let digitPattern = /\d/g;
    let coolThreshold = text.match(digitPattern).map(Number).reduce((a, b) => a * b);
    let counter = 0;
    let list = [];

    let match = emojiPattern.exec(text);
    while (match != null) {
        counter++;
        let funSum = 0;
        let current = match[2];

        for (let each of current) {
            funSum += each.charCodeAt();
        }
        if (funSum > coolThreshold) {
            list.push(match[0]);
        }

        match = emojiPattern.exec(text);
    }
    console.log(`Cool threshold: ${coolThreshold}`);
    console.log(`${counter} emojis found in the text. The cool ones are:`);
    for (let each of list) {
        console.log(each);
    }
}

emojiDetector(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);