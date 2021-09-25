function sortByTwoCriteria(input) {
    const list = input.sort((a, b) => a.length - b.length || a.localeCompare(b));

    return list.join('\n');
}
console.log(sortByTwoCriteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'
]));