function sumEven(nums) {

    sum = 0;
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] % 2 === 0) {
            sum += Number(nums[i])
        }
    }
    console.log(sum);

}
sumEven(['1', '2', '3', '4', '5', '6'])