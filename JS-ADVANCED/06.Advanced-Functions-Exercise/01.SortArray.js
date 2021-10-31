function sortArray(arr, string) {
    function sorting(a, b) {
        if (string == 'asc') {
            return a - b;
        } else if (string == 'desc') {
            return b - a;
        }
    }
    return arr.sort(sorting);
}

console.log(sortArray([14, 7, 17, 6, 8], 'asc'));