'use strict';

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
	let currentRunningSum = 0;
	const currentSet = [];
	const allSets = [];

	for (let i = 0; i < nums.length; i++) {
		currentRunningSum += nums[i];
		currentSet.push(nums[i]);

		if (i >= 3) {
			if (currentRunningSum === target) {
				allSets.push([...currentSet]);
			}

			currentRunningSum -= nums[i - 3];
			console.log(`i: ${i} (i - 3): ${i - 3}`);
			currentSet.length = 0;
		}
	}

	console.log(allSets);
};

const nums = [1, 0, -1, 0, -2, 2],
	target = 0;
fourSum(nums, target);
