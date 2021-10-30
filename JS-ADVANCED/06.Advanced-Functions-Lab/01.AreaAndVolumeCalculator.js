function solve(area, vol, input) {
    const data = JSON.parse(input);
    const result = [];
    for (let cube of data) {
        const cubeArea = area.apply(cube);
        const volume = vol.apply(cube)

        result.push({
            area: cubeArea,
            volume: volume
        })
    }
    return result
}

console.log(solve(area, vol, `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`));


function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};