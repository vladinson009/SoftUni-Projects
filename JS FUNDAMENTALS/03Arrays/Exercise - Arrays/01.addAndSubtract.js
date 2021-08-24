function addSubstract(list) {
    let newList = [];
    let sumBefore = 0;
    let sumAfter = 0;
    for (let i = 0; i < list.length; i++) {
        let currentumber = list[i];
        sumBefore += currentumber;
        if (currentumber % 2 === 0) {
            newList[i] = currentumber + i;
        } else {
            newList[i] = currentumber - i;
        }
        sumAfter += newList[i];
    }
    console.log(newList);
    console.log(sumBefore);
    console.log(sumAfter);
}
addSubstract([5, 15, 23, 56, 35])