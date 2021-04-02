/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
	let runningSum = 0;
	for(let i=0; i<nums.length; i++) {
		runningSum += nums[i];
		nums[i] = runningSum;
	}

	return nums;
};

const nums1 = [1,2,3,4];
console.log(runningSum(nums1));

const nums2 = [1,1,1,1, 1];
console.log(runningSum(nums2));

const nums3 = [3,1,2,10,1];
console.log(runningSum(nums3));