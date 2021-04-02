/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
	 intervals.sort(function(a, b) {
		return a[0] - b[0];
	 });

	 console.log(intervals);
};


const intervals = [[1,2],[5,8],[3,7],[8,12],[2,4],[4,6]];
merge(intervals);