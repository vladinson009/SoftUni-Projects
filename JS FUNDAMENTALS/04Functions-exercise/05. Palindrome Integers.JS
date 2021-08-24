function palindromeIntegers(list) {

    function reverseInt(one) {

        for (let i = 0; i < one.length; i++) {
            let straight = one[i];
            let reversed = Number(straight.toString().split('').reverse().join(''));
            if (straight === reversed) {
                console.log(true);
            } else {
                console.log(false);
            }
        }
    }
    reverseInt(list)
}

palindromeIntegers([32, 2, 232, 1010])