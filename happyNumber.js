/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
	let cycles = 0;
	let result = 0;
	while (result != 1 && cycles <= 10) {
		cycles++;
		const asStringArray = n.toString().split('');
		result = asStringArray.reduce((accum, value) => {
			return parseInt(accum, 10) + Math.pow(parseInt(value, 10), 2);
		}, 0);

		if (result === 1) {
			return true;
		}

		n = result;
	}

	return false;
};

console.log(isHappy(19));
