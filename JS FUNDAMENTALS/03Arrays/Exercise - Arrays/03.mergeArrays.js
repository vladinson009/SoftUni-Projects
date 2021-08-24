function mergeArrays(firstList, secondList) {
    let newArray = [];
    for (let i = 0; i < firstList.length; i++) {
        let firstElement = firstList[i];
        let secondElement = secondList[i];

        if (i % 2 === 0) {
            newArray[i] = Number(firstElement) + Number(secondElement);
        } else {
            newArray[i] = firstElement + secondElement;
        }
    }
    console.log(newArray.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11'])