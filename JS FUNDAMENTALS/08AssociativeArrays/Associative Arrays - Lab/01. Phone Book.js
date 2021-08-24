function phoneBook(list) {

    let phoneBook = {};
    for (let el of list) {
        let tokens = el.split(' ');
        let name = tokens[0];
        let phoneNumber = tokens[1];
        phoneBook[name] = phoneNumber;
    }
    for (let el in phoneBook) {
        console.log(`${el} -> ${phoneBook[el]}`);
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);