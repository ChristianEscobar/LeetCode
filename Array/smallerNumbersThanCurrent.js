/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
	const result = [];
	const counts = {};

	const numsCopy = [...nums];
	numsCopy.sort( (a, b) => a - b);

	for(let i = 0; i < numsCopy.length; i++) {
		// The first number in the array will have no other numbers before it
		if(i === 0) {
			counts[numsCopy[i]] = 0;
		} else {
			if(!counts.hasOwnProperty(numsCopy[i])) {
				counts[numsCopy[i]] = i;
			}
		}
	}
	
	for(let i = 0; i < nums.length; i++) {
		result.push(counts[nums[i]]);
	}

	return result;
};

const nums = [8,1,2,2,3];
console.log(smallerNumbersThanCurrent(nums));

const nums2 = [6,5,4,8];
console.log(smallerNumbersThanCurrent(nums2));

const nums3 = [7,7,7,7];
console.log(smallerNumbersThanCurrent(nums3));