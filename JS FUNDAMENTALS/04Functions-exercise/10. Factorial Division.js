function factorialNum(factorial, divide) {

    function theFactorialFunction(numb) {
        if (numb === 0 || numb === 1)
            return 1;
        for (let i = numb - 1; i >= 1; i--) {
            numb *= i;
        }
        return numb;

    }
    let factorialAmount = theFactorialFunction(factorial);
    let dividedAmount = theFactorialFunction(divide)
    let result = (factorialAmount / dividedAmount).toFixed(2)
    console.log(result);
}
factorialNum(0, 2)