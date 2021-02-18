/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  const stack = [];
	const sArray = S.split('');
	let output = '';
	let appendToOutput = false;
	let remainingOpenParens = 0;
	for (let i=0; i < sArray.length; i++) {
		const char = sArray[i];
		if (appendToOutput) {
			output += char;

			if(char === ')') {
				remainingOpenParens--;
			} else if (char === '(') {
				remainingOpenParens++;
			}
			if(remainingOpenParens === 0) {
				appendToOutput = false;
			} else {
				appendToOutput = true;
			}
		}
		else if (char === '(') {
			stack.push(char);
		} else {
			if (stack.length === 1) {
				stack.pop();
			} else if (stack.length === 2) {
				output += stack.pop()
				output += char;
			} else if (stack.length > 2) {
				while(stack.length > 1) {
					output += stack.pop();
					remainingOpenParens++;
				}
				output += char;
				
				remainingOpenParens--;
				if(remainingOpenParens === 0) {
					appendToOutput = false;
				} else {
					appendToOutput = true;
				}
			}
		}
	}

	return output;
};

/**
 * The function below is a work in progress
 */
var removeOuterParenthesesV2 = function(S) {
  const stack = [];
	const sArray = S.split('');
	let output = '';
	let remainingOpenParens = 0;

	for (let i=0; i < sArray.length; i++) {
		const char = sArray[i];
		if (char === '(') {
			stack.push(char);
		} else if (stack.length > 1 && (output.length % 2 !== 0)) {
			output += stack.pop();
			output += char;
		} else if (stack.length === 1 && remainingOpenParens > 0) {
			output += char;
			remainingOpenParens--;
		} else if (stack.length > 1) {
			while (stack.length > 1) {
				output += stack.pop();
				remainingOpenParens++;
			}
			output += char;
			remainingOpenParens--;
		} else {
			stack.pop();
		}
	}

	return output;
};

const s1 = '(()())(())';
console.assert(removeOuterParenthesesV2(s1) === '()()()', 's1 output is incorrect');

const s2 = '(()())(())(()(()))';
console.assert(removeOuterParenthesesV2(s2) === '()()()()(())', 's2 output is incorrect');

// const s2 = '(()(()))';
// console.assert(removeOuterParenthesesV2(s2) === '()(())', 's2 output is incorrect');

const s3 = '()()';
console.assert(removeOuterParenthesesV2(s3) === '', 's3 output is incorrect');

const s4 = '((()())(()()))'
console.assert(removeOuterParenthesesV2(s4) === '(()())(()())', 's4 output is incorrect');

const s5 = '(((((())))))';
console.assert(removeOuterParenthesesV2(s5) === '((((()))))', 's5 output is incorrect');