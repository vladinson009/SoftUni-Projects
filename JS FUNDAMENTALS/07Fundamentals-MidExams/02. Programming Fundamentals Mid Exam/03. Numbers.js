function numbers(input) {
    let list = input.split(' ').map(Number);
    let sum = 0;
    for (let nums of list) {
        sum += Number(nums)
    }
    sum /= list.length;
    let filtered = list.filter(x => x > sum).sort((a, b) => b - a);
    if (filtered.length !== 0) {
        if (filtered.length > 5) {
            filtered.length = 5;
        }
        console.log(filtered.join(' '));
    } else {
        console.log('No');
    }
}
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')