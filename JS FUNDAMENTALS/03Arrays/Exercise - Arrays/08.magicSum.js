function magicSum(list, num) {
    for (let i = 0; i < list.length; i++) {
        for (let j = i + 1; j < list.length; j++) {

            if (list[i] + list[j] === num) {
                console.log('' + list[i] + ' ' + list[j]);
            }

        }
    }

}
magicSum([14, 20, 60, 13, 7, 19, 8],
    27)