function equalSum(list) {
    let isTrue = true;
    for (let i = 0; i < list.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let j = i; j < list.length - 1; j++) {
            rightSum += list[j + 1]
        }
        for (let k = i; k >= 0; k--) {
            if (k < 0) {
                break;
            }
            if (k > 0)
                leftSum += list[k - 1]
        }
        if (leftSum === rightSum) {
            console.log(i);
            isTrue = false;
            break;
        }
    }
    if (isTrue) {
        console.log('no');
    }

}

equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])