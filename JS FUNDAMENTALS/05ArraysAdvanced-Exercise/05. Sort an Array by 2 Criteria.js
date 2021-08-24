function sortByTwoCriteria(list) {
    let sortedList = list.sort((a, b) => a.length - b.length || a.localeCompare(b))
    console.log(sortedList.join('\n'));
}

sortByTwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"])