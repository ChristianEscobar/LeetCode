/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
	if(S.length === 0) {
		return '';
	}

	const output = []
	const stack = [];
	for(let i=0; i < S.length; i++) {
		const currentToken = S[i];
		const peekedValue = stack[stack.length - 1];
		if(!peekedValue) {
			stack.push(currentToken);
		} else if (currentToken === peekedValue) {
			stack.pop();
		} else {
			stack.push(currentToken);
		}
	}

	while(stack.length > 0) {
		output.unshift(stack.pop());
	}

	return output.join('');
};

const string1 = '';
console.log(removeDuplicates(string1));

const string2= 'abbaca';
console.log(removeDuplicates(string2));

