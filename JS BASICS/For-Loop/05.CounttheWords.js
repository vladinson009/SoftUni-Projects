function countOf(input) {

    let message = input[0];
    let words = 1;

    for (let i = 0; i < message.length; i++) {
        if (message[i] === ' ') {
            words++;
        }
    }
    if (words > 10) {
        console.log(`The message is too long to be send! Has ${words} words.`);
    } else {
        console.log('The message was sent successfully!')
    }
}
countOf(["This message has exactly eleven words. One more as it's allowed!"])