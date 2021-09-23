function rotateArray(array, rotations) {


    for (let i = 0; i < rotations; i++) {
        array.unshift(array.pop());
    }
    return array.join(' ')
}
console.log(rotateArray(['Banana',
        'Orange',
        'Coconut',
        'Apple'
    ],
    15));