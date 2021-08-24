function functionSorting(sortingList) {
    let newList = [];
    let sortingLength = sortingList.length;
    for (let i = 0; i < sortingLength; i++) {
        if (i % 2 === 0) {
            let idx = sortingList.indexOf(Math.max(...sortingList));
            let currentMax = sortingList.splice(idx, 1);
            newList.push(currentMax);
        } else {
            let idx = sortingList.indexOf(Math.min(...sortingList));
            let currentMin = sortingList.splice(idx, 1);
            newList.push(currentMin);
        }
    }
    console.log(newList.join(' '));
}

functionSorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])