function sumOfTwo(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let isTrue = false;
    let counter = 0;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            counter++
            if (i + j === magicNumber) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${i+j})`);
                isTrue = true
                break;
            }
        }
        if (isTrue) {
            break;
        }
    }
    if (isTrue === false) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
}