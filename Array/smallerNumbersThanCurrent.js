/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
	const result = [];
	for(let i=0; i < nums.length; i++) {
		let counter = 0;
		for(let j=0; j < nums.length; j++) {
			if(j != i) {
				if(nums[j] < nums[i]) {
					counter++;
				}
			}
		}

		result.push(counter);
	}

	return result;
};

const nums = [8,1,2,2,3];
console.log(smallerNumbersThanCurrent(nums));

const nums2 = [6,5,4,8];
console.log(smallerNumbersThanCurrent(nums2));

const nums3 = [7,7,7,7];
console.log(smallerNumbersThanCurrent(nums3));