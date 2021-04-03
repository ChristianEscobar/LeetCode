/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
	if(nums.length === 0) {
		return 0;
	}

	let maxEndingHere = nums[0];
	let maxSoFar = nums[0];

	for(let i = 1; i < nums.length; i++) {
		maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]);
		maxSoFar = Math.max(maxEndingHere, maxSoFar);
	}

	return maxSoFar;
};