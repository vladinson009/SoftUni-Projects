function condenseArrayToNumber(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums.length == 1) {
            break;
        }
        let newArray = [];
        for (let j = 0; j < nums.length - 1; j++) {

            newArray[j] = nums[j] + nums[j + 1]
        }
        nums = newArray
        i = 0;
    }
    console.log(nums.toString())
}
condenseArrayToNumber([1])