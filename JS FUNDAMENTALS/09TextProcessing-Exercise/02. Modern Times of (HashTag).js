function hashTags(text) {

    text = text.split(' ');

    for (let word of text) {
        let isValid = true;
        if (word.includes('#') && word.length > 1) {

            for (let symbol of word) {

                if (symbol.charCodeAt(0) >= 48 && symbol.charCodeAt(0) <= 57) {
                    isValid = false;
                    break;
                }
            }
            if (isValid) {
                console.log(word.slice(1));
            }
        }

    }

}
hashTags('Nowadays everyone uses # to tag a #special word in #socialMedia');