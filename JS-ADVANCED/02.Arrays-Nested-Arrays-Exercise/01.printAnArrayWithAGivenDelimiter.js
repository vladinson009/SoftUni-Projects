function printAnArrayWithAGivenDelimiter(array, separator) {
    return array.join(separator);

}

console.log(printAnArrayWithAGivenDelimiter(['One',
        'Two',
        'Three',
        'Four',
        'Five'
    ],
    '-'));