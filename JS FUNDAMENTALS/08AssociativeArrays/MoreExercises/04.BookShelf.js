function bookShelf(input) {
    let shelf = {};

    for (let each of input) {
        if (each.includes(' -> ')) {
            let [id, genre] = each.split(' -> ');
            if (!shelf.hasOwnProperty(id)) {
                shelf[id] = {
                    [genre]: []
                }
            }
        } else {
            let [book, bookGenre] = each.split(', ')
            for (let key in shelf) {
                if (shelf[key].hasOwnProperty(bookGenre)) {
                    shelf[key][bookGenre].push(book);
                }
            }
        }
    }
    let sortedByLength = Object.entries(shelf).sort(sorting);
    for (let each of sortedByLength) {
        let genre = Object.keys(each[1]);
        let id = each[0];
        let books = shelf[id][genre].sort((a, b) => a.localeCompare(b));
        console.log(`${id} ${genre}: ${books.length}`);
        for (let book of books) {
            console.log('--> ' + book);
        }

    }

    function sorting(a, b) {
        let keyA = Object.keys(a[1]);
        let lengthA = a[1][keyA].length;

        let keyB = Object.keys(b[1]);
        let lengthB = b[1][keyB].length;
        return lengthB - lengthA;
    }
}

bookShelf(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history'])