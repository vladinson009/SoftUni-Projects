function wordTracker(input) {
    let theSentence = input.shift().split(' ');
    let myList = {};
    for (let el of theSentence) {
        myList[el] = 0;
    }
    for (let word of input) {
        if (myList.hasOwnProperty(word)) {
            myList[word]++
        }
    }
    let sorted = Object.entries(myList).sort((a, b) => b[1] - a[1])

    for (let [word, count] of sorted) {
        console.log(`${word} - ${count}`);
    }
}
wordTracker([
    'this sentence', 'In', , 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);