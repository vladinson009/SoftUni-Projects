function movieRateing(input) {
    let index = 0;
    let numberOfMovies = Number(input[index++]);
    let highRateing = 0;
    let topMovie = ''
    let lowRateing = 10;
    let lowMovie = '';
    let avgRateing = 0

    for (let i = 1; i <= numberOfMovies; i++) {
        let movieName = input[index++];
        let movieRateing = Number(input[index++]);
        avgRateing += movieRateing;
        if (highRateing < movieRateing) {
            highRateing = movieRateing;
            topMovie = movieName;
        }
        if (lowRateing > movieRateing) {
            lowRateing = movieRateing;
            lowMovie = movieName;
        }
    }
    console.log(`${topMovie} is with highest rating: ${highRateing.toFixed(1)}
${lowMovie} is with lowest rating: ${lowRateing.toFixed(1)}
Average rating: ${(avgRateing/ numberOfMovies).toFixed(1)}`);
}
movieRateing(["5",
    "A Star is Born",
    "7.8",
    "Creed 2",
    "7.3",
    "Mary Poppins",
    "7.2",
    "Vice",
    "7.2",
    "Captain Marvel",
    "7.1"
])