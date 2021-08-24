function favBook(input) {
    let oldFav = input.shift().split(' | ');
    let action = input.shift();

    while (action !== 'Stop!') {
        action = action.split(' ');
        let command = action[0];
        let category = action[1];
        let newGenre = action[2];

        switch (command) {
            case 'Join':
                if (!oldFav.includes(category)) {
                    oldFav.push(category);
                }
                break;
            case 'Drop':
                if (oldFav.includes(category)) {
                    let idx = oldFav.indexOf(category);
                    oldFav.splice(idx, 1)
                }
                break;
            case 'Replace':
                if (oldFav.includes(category) && !oldFav.includes(newGenre)) {
                    let idx = oldFav.indexOf(category);
                    oldFav[idx] = newGenre;
                }
                break;
        }
        action = input.shift()
    }
    console.log(oldFav.join(' '));
}

favBook(["Romance | Fiction | Horror | Mystery",
    "Drop Romance",
    "Join Fantasy",
    "Stop!"
])