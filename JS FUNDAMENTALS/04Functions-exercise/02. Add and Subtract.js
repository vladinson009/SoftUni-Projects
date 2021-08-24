function addAndSubtract(first, second, third) {

    function sum(one, two) {
        let theSum = one + two;
        return theSum;
    }

    function subtract(theFirst, theSecond) {
        let theSubtract = theFirst - theSecond;
        return theSubtract;
    }
    let theSum = sum(first, second);
    let result = subtract(theSum, third);
    console.log(result);

}
addAndSubtract(42, 58, 100)