function movies(list) {
    let moviesList = [];

    for (let info of list) {
        let tokens = info.split(' ');
        if (tokens.includes('addMovie')) {
            tokens.shift();
            let name = tokens.join(' ');

            let currentObj = {
                name: name,
            }
            moviesList.push(currentObj);

        } else if (tokens.includes('directedBy')) {
            let idx = tokens.indexOf('directedBy');
            let name = tokens.slice(0, idx).join(' ')
            let director = tokens.slice(idx + 1).join(' ');

            let movie = moviesList.find(x => x.name === name)

            if (movie) {
                movie.director = director;
            }

        } else if (tokens.includes('onDate')) {
            let date = tokens.pop();
            tokens.pop();
            let name = tokens.join(' ');
            let movie = moviesList.find(x => x.name === name)
            if (movie) {
                movie.date = date;
            }
        }
    }
    for (let movie of moviesList) {

        if (movie.name && movie.director && movie.date) {

            console.log(JSON.stringify(movie));
        }
    }

}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
])