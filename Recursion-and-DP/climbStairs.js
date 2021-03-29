const climbStairs = function(n) {
	function climbStairsBF(i, n) {
		if(i > n) {
			return 0;
		}

		if(i === n) {
			return 1;		
		}

		return climbStairsBF(i + 1, n) + climbStairsBF(i + 2, n);
	}

	return climbStairsBF(0, n);
}

console.log(climbStairs(3));