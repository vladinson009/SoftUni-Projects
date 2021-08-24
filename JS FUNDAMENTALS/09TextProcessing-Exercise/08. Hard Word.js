function hardWork(input) {
    let letter = input[0]
    let words = input[1];
    let _counter = 0;
    for (let i = 0; i < letter.length; i++) {

        if (letter[i] == '_') {
            _counter++
        } else {
            for (let every of words) {
                if (every.length == _counter) {
                    letter = letter.replace('_'.repeat(_counter), every);
                    _counter = 0;
                    break;
                }
            }
        }

    }
    console.log(letter);
}
hardWork(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']
]);