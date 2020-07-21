/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	const tracker = new Map();
	const results = [];
	for (let i = 0; i < nums.length; i++) {
		const difference = target - nums[i];
		if (tracker.has(difference)) {
			results.push(tracker.get(difference));
			results.push(i);
			break;
		}

		tracker.set(nums[i], i);
	}

	return results;
};

const nums = [2, 7, 11, 15],
	// const nums = [2, 11, 15, 7];
	target = 9;
console.log(twoSum(nums, target));
