/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
	 intervals.sort((a, b) => a[0] - b[0]);

	 console.log(intervals);
};

const intervals = [[1, 2], [5, 8], [3, 7], [8, 12], [2, 4], [4, 6]];
merge(intervals);
