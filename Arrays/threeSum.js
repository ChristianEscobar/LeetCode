/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  if (nums.length === 0) {
    return [];
  }

  nums.sort((a, b) => a - b);
  const results = [];
  for (let i = 0; i < nums.length - 2; i += 1) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let start = i + 1;
      let end = nums.length - 1;
      const sum = 0 - nums[i];
      while (start < end) {
        if (nums[start] + nums[end] === sum) {
          results.push([nums[i], nums[start], nums[end]]);
          // Handle duplicates here
          while (start < end && nums[start] === nums[start + 1]) {
            start += 1;
          }
          while (start < end && nums[end] === nums[end - 1]) {
            end -= 1;
          }
          start += 1;
          end -= 1;
        } else if (nums[start] + nums[end] < sum) {
          start += 1;
        } else {
          end -= 1;
        }
      }
    }
  }

  return results;
};

// const threeSum = function (nums) {
//   const result = [];
//   const lookup = {};
//   for (let i = 0; i < nums.length; i += 1) {
//     for (let j = i + 1; j < nums.length; j += 1) {
//       for (let k = j + 1; k < nums.length; k += 1) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           result.push([nums[i], nums[j], nums[k]]);
//         }
//       }
//     }
//   }

//   console.log(result);
//   return result;
// };

const nums = [-1, 0, 1, 2, -1, -4];
threeSum(nums);
