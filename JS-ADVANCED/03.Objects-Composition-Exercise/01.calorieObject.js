function calorieObject(input) {
    const myObj = {};
    for (let i = 0; i < input.length; i += 2) {
        myObj[input[i]] = Number(input[i + 1]);
    }
    console.log(myObj);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);