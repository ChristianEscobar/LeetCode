/**
 * @param {number[]} nums
 * @return {number[]}
 */
const decompressRLElist = function (nums) {
  const results = [];
  const concatResults = [];
  for (let i = 0; i < nums.length; i += 2) {
    const freq = nums[i];
    const val = nums[i + 1];
    results.push(new Array(freq).fill(val));
  }

  results.forEach((arr) => concatResults.push(...arr));

  return concatResults;
};

const nums = [1, 2, 3, 4];
console.log(decompressRLElist(nums));

const nums2 = [1, 1, 2, 3];
console.log(decompressRLElist(nums2));
