function arrayRotation(list, rotation) {
    let newArray = [];
    for (let i = 0; i < rotation; i++) {
        let firstElement = list[0]; // 51

        for (let j = 0; j < list.length; j++) {
            if (j === list.length - 1) {
                newArray[j] = firstElement;
            } else {
                newArray[j] = list[j + 1]
            }
        }
        list = newArray
    }
    console.log(list.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2)
// 32 61 21 51 47