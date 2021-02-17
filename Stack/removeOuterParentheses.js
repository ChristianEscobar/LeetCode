/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
  const stack = [];
	const sArray = S.split('');
	let output = '';
	let appendToOutput = false;
	let numberOfOpenParens = 0;
	for (let i=0; i < sArray.length; i++) {
		const char = sArray[i];
		if (appendToOutput) {
			output += char;

			if(char === ')') {
				numberOfOpenParens--;
			} else if (char === '(') {
				numberOfOpenParens++;
			}
			if(numberOfOpenParens === 0) {
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
					numberOfOpenParens++;
				}
				output += char;
				
				numberOfOpenParens--;
				if(numberOfOpenParens === 0) {
					appendToOutput = false;
				} else {
					appendToOutput = true;
				}
			}
		}
	}

	return output;
};

// const s1 = '(()())(())';
// console.assert(removeOuterParentheses(s1) === '()()()', 's1 output is incorrect');

// const s2 = '(()())(())(()(()))';
// console.assert(removeOuterParentheses(s2) === '()()()()(())', 's2 output is incorrect');

// const s3 = '()()';
// console.assert(removeOuterParentheses(s3) === '', 's3 output is incorrect');

const s4 = '((()())(()()))'
console.assert(removeOuterParentheses(s4) === '(()())(()())', 's4 output is incorrect');