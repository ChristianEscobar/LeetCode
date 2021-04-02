/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
	let numberOfPairs = 0;
	let right = -1;

	for(let left = 0; left < nums.length; left++) {
		right = left + 1;
		checkForPair(left, right);

		right++;
		while(right <= nums.length) {
			checkForPair(left, right);
			
			right++;
		}
	}

	function checkForPair(left, right) {
		if(nums[left] === nums[right]) {
			numberOfPairs++;
		}
	}

	return numberOfPairs;
};

const nums = [1,2,3,1,1,3];
console.log(numIdenticalPairs(nums));

const nums2 = [1,1,1,1];
console.log(numIdenticalPairs(nums2));

const nums3 = [1,2,3];
console.log(numIdenticalPairs(nums3));