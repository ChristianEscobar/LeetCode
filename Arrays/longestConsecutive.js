/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutiveBF = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  nums.sort((a, b) => a - b);

  let longestSeq = Number.MIN_SAFE_INTEGER;
  let counter = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      if (nums[i] - nums[i - 1] === 1) {
        counter += 1;
      } else {
        longestSeq = Math.max(counter, longestSeq);
        counter = 1;
      }
    }
  }

  return longestSeq = Math.max(counter, longestSeq);
};
