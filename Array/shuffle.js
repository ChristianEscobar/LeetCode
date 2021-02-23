/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
	let ptr1 = 0;
	let ptr2 = n;
	const result = [];

	while(ptr1 < n) {
		result.push(nums[ptr1]);
		result.push(nums[ptr2]);
		
		ptr1++;
		ptr2++;
	}

	return result;
};

const nums = [2,5,1,3,4,7];
let n = 3;
console.log(shuffle(nums, n));

const nums2 = [1,2,3,4,4,3,2,1];
n = 4;
console.log(shuffle(nums2, n));

const nums3 = [1,1,2,2];
n = 2;
console.log(shuffle(nums3, n));