/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
	let sum = 0;
  if(ops.length === 0) {
		return sum;
	}
	
	const stack = [];
	for (let i=0; i < ops.length; i++) {
		const op = ops[i];
		if(!isNaN(op)) {
			stack.push(parseInt(op));
		} else if (op === '+') {
			const prev1 = stack.pop();
			const prev2 = stack.pop();
			const sum = prev1 + prev2;
			stack.push(prev2);
			stack.push(prev1);
			stack.push(sum);
		} else if (op === 'D') {
			const prev = stack.pop();
			const double = 2 * prev;
			stack.push(prev);
			stack.push(double);
		} else if (op === 'C') {
			stack.pop();
		}
	}

	while(stack.length > 0) {
		sum += stack.pop();
	}

	return sum;
};

const ops1 = ['5','2','C','D','+'];
console.log(calPoints(ops1));

const ops2 = ['5','-2','4','C','D','9','+','+'];
console.log(calPoints(ops2));

const ops3 = ['1'];
console.log(calPoints(ops3));