/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
	let onesCount = 0;
	const binary = n.toString(2);
	for(let i = 0; i < binary.length; i++) {
		if(binary[i] === '1') {
			onesCount++;
		}
	}

	return onesCount;
};

console.log(hammingWeight(42));