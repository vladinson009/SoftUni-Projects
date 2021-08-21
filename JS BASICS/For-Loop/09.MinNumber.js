// function minNumber(input) {
//     let n = Number(input.shift());
//     let minNum = Number.MAX_SAFE_INTEGER;
//     let numbers = Number(input.shift());

//     for (let i = 0; i < n; i++) {
//         if (minNum > numbers) {
//             minNum = numbers;
//         }
//         numbers = Number(input.shift());
//     }

//     console.log(minNum)
// }

function minNumber(input) {
    let n = Number(input[0]);
    let minNum = Number.MAX_SAFE_INTEGER;
    let index = 1


    for (let i = 0; i < n; i++) {
        let number = Number(input[index])
        index++
        if (number < minNum) {
            minNum = number;
        }
    }
    console.log(minNum)
}
minNumber(["3", "-10", "20", "-30"])