function perfectNumber(perfNum) {

    function isPerfect(numb) {
        let sumOfPerf = 0;
        for (let i = 1; i < numb; i++) {
            if (numb % i === 0) {
                sumOfPerf += i;
            }
        }
        return numb === sumOfPerf;
    }

    let ourNumber = isPerfect(perfNum);

    if (ourNumber) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }
}
perfectNumber(1236498)

/*if (sumOfPerf === numb) {
            return 'We have a perfect number!';
        } else {
            return 'It\'s not so perfect.';
        }*/