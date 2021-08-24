function commonElements(firstList, secondList) {
    for (let i = 0; i < firstList.length; i++) {
        let firstElement = firstList[i];

        for (let j = 0; j < secondList.length; j++) {
            let secondElement = secondList[j];
            if (firstElement === secondElement) {
                console.log(firstElement);
            }
        }
    }
}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l'])