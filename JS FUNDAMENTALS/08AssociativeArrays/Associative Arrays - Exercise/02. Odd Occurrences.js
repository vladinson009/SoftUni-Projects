function oddOccurrences(input) {
    let map = new Map();
    let string = input.toLowerCase().split(' ');
    let result = [];
    for (let el of string) {

        if (!map.has(el)) {
            map.set(el, 0)
        }
        map.set(el, map.get(el) + 1)
    }
    map.forEach((x, y) => {
        if (map.get(y) % 2 !== 0) {
            result.push(y)
        }
    })
    console.log(result.join(' '));

}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')