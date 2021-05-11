/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  function getMidpoint(start, end) {
    return Math.floor(start + (end - start) / 2);
  }

  function binarySearch(arr, start, end) {
    const midpoint = getMidpoint(start, end);

    // Case 1
    if (arr[midpoint] === target) {
      return midpoint;
    }

    // Case 2
    if (arr[midpoint] <= arr[end]) {
      // Case 2A
      if (target > arr[midpoint] && target <= arr[end]) {
        // Go right
        return binarySearch(arr, midpoint + 1, end);
      }
      // Case 2B
      // Go left
      return binarySearch(arr, 0, midpoint - 1);
    }

    // Case 3
    if (arr[start] <= arr[midpoint]) {
      // Case 3A
      if (target >= arr[start] && target < arr[midpoint]) {
        // Go left
        return binarySearch(arr, 0, midpoint - 1);
      }
      // Case 3B
      // Go right
      return binarySearch(arr, midpoint + 1, end);
    }

    return -1;
  }

  return binarySearch(nums, 0, nums.length - 1);
};

const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 6;

console.log(search(nums, target));
