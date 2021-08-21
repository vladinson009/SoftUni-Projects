function oldBooks (input) {

    let index = 0;
    let favouriteBook = input[index++];
    let currentBook = input[index++];
    let checkedBooks = 0;

    while(currentBook !== 'No More Books') {
        if( currentBook === favouriteBook) {
            console.log(`You checked ${checkedBooks} books and found it.`);
            return;
        }
        checkedBooks++;
        currentBook = input[index++];
    }
    console.log(`The book you search is not here!
    You checked ${checkedBooks} books.`);
}
oldBooks(["Troy",
"Stronger",
"Life Style",
"Troy"])