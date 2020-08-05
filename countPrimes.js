/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
	let primeCounter = 0;
	for (let i = 1; i < n; i++) {
		if (isPrime(i)) {
			primeCounter++;
		}
	}

	return primeCounter;

	function isPrime(num) {
		if (num < 2) {
			return false;
		}

		if (num === 2) {
			return true;
		}

		const root = Math.ceil(Math.sqrt(num));
		for (let j = 2; j <= root; j++) {
			if (num % j === 0) {
				return false;
			}
		}

		return true;
	}
};

console.log(countPrimes(10));
console.log(countPrimes(2));
