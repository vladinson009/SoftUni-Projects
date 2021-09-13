function square(input) {
    input = Number(input);
    if (!isNaN(input)) {
        for (let i = 0; i < input; i++) {
            let result = []
            for (let j = 0; j < input; j++) {
                result.push('*')
            }
            console.log(result.join(' '));
        }

    } else {
        for (let i = 0; i < 5; i++) {
            let result = []
            for (let j = 0; j < 5; j++) {
                result.push('*')
            }
            console.log(result.join(' '));
        }
    }

}
square(2)