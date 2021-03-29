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

const climbStairsV2 = function(n) {
	function climbStairsBF(i) {
		if(i < 0) {
			return 0;
		}

		if(i === 0) {
			return 1;
		}

		return climbStairsBF(i - 2) + climbStairsBF(i - 1);
	}

	return climbStairsBF(n);
}

const climbStairsDP = function(n) {
	function solve(steps, memo) {
		if(steps === 0) {
			return 1;
		}

		if(steps < 0) {
			return 0;
		}
		if(memo[steps]) {
			return memo[steps]
		}

		memo[steps] = solve(steps - 2, memo) + solve(steps - 1, memo);
		return memo[steps];
	}

	return solve(n, []);
}

console.log(climbStairsDP(3));