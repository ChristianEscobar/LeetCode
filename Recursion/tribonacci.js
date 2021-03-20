/**
 * @param {number} n
 * @return {number}
 */
 var tribonacci = function(n) {
	
	const cache = [];
	function calculate(n, memo) {
		if(memo[n]) {
			return memo[n];
		}
		if(n === 0) {
			memo[n] = 0;
			return memo[n];
		} else if(n <= 2) {
			memo[n] = 1;
			return memo[n];
		}

		memo[n] = calculate(n-1, memo) + calculate(n-2, memo) + calculate(n-3, memo);
		return memo[n];
	}

	return calculate(n, cache);
};

console.log(tribonacci(32));