function favMovie(input) {
    let index = 0;
    let movie = input[index++];
    let movieCount = 0;
    let sumSymbols = 0;

    let tempSymbols = 0;
    let bestMovie = '';
    while (movie !== 'STOP') {
        for (let i = 0; i < movie.length; i++) {
            let currentCharCode = movie.charCodeAt(i);
            let currentCharSymbol = movie.charAt(i);
            if (currentCharSymbol >= 'A' && currentCharSymbol <= 'Z') {
                tempSymbols += (currentCharCode - movie.length);
            } else if (currentCharSymbol >= 'a' && currentCharSymbol <= 'z') {
                tempSymbols += currentCharCode - movie.length * 2;
            } else {
                tempSymbols += currentCharCode;
            }
        }
        if (tempSymbols > sumSymbols) {
            sumSymbols = tempSymbols;
            bestMovie = movie;
        }
        movieCount++;
        if (movieCount === 7) {
            console.log('The limit is reached.');
            break;
        }
        tempSymbols = 0;
        movie = input[index++];
    }
    console.log(`The best movie for you is ${bestMovie} with ${sumSymbols} ASCII sum.`);
}
favMovie(["Matrix", "Breaking bad", "Legend", "STOP"])