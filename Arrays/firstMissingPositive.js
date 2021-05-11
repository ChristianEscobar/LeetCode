// Given an unsorted integer array nums, find the smallest missing positive integer.

/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function (nums) {
  if (nums.length === 0) {
    return 1;
  }

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] > nums.length || nums[i] <= 0) {
      nums[i] = Number.MAX_SAFE_INTEGER;
    }
  }

  for (let i = 0; i < nums.length; i += 1) {
    const val = Math.abs(nums[i]);
    if (val <= nums.length) {
      if (nums[val - 1] > 0) {
        nums[val - 1] *= -1;
      }
    }
  }

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }

  return nums.length + 1;
};

const nums = [1, 2, 0];
console.log(firstMissingPositive(nums));
