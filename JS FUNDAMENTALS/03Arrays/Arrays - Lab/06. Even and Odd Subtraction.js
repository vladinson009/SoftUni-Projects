function evenOddSubtraction(nums) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            sumEven += Number(nums[i]);
        } else {
            sumOdd += Number(nums[i]);
        }
    }
    console.log((sumEven - sumOdd));
}
evenOddSubtraction([2, 4, 6, 8, 10])