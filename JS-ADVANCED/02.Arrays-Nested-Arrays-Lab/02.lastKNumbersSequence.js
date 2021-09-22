function lastKNumber(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        let currentEl = result.slice(-k)
            .map(Number)
            .reduce((a, b) => a + b, 0);
        result.push(currentEl);
    }
    return result;
}
console.log(lastKNumber(6, 3));