/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }

  // Sort the intervals, this way overlapping will be next to each other
  intervals.sort((a, b) => a[0] - b[0]);

  // Store the first interval in the array
  // This will serve as a new interval
  const result = [];

  let newInterval = intervals[0];
  // Arrays are pass by reference so when we push newInterval array
  // to the results array, from this point forward, the newInterval array will be updated
  // when changes are made to any of its values
  result.push(newInterval);
  for (let i = 0; i < intervals.length; i++) {
    const curInterval = intervals[i];

    // Determine if the current interval we are checking
    // overlaps the interval we have designated as new
    // We check this by comparing the start time of the current inteval
    // to the end time of the interval we are working on
    if (curInterval[0] <= newInterval[1]) {
      // Set the end time of the interval we are working on
      // to the end time of the current interval or the one we are working on
      newInterval[1] = Math.max(curInterval[1], newInterval[1]);
    } else {
      // We have no overlap, so start looking at a new interval
      // and push to results
      newInterval = curInterval;
      result.push(newInterval);
    }
  }

  return result;
};

const input = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(merge(input));
