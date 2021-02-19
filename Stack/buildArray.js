/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
	let targetPos = 0;
	const output = [];
	for(let i=1; i <=n; i++) {
		if(i === target[targetPos]) {
			output.push('Push');
			targetPos++;
		} else {
			output.push('Push');
			output.push('Pop');
		}

		if(targetPos === target.length) {
			break;
		}
	}

	return output;
};

const target1 = [1,3];
const n1 = 3;
console.log(buildArray(target1, n1));

const target2 = [1,2,3];
const n2 = 3;
console.log(buildArray(target2, n2));