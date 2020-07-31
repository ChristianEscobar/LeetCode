/**
 * Given two strings A and B of lowercase letters,
 * return true if and only if we can swap two letters in A so that the result equals B.
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function (A, B) {
	if (A.length === 0 || B.length === 0) {
		return false;
	}

	if (A.length !== B.length) {
		return false;
	}

	// Handle when both A and B are the same
	if (A === B) {
		let uniqueChars = new Set();
		for (const char of A.split('')) {
			uniqueChars.add(char);
		}

		if (uniqueChars.size < A.length) {
			return true;
		} else {
			return false;
		}
	}

	// Check if the char at position i is not the same
	// between the two strings.  If true, store the index
	const diff = [];
	for (let i = 0; i < A.length; i++) {
		if (A.charAt(i) !== B.charAt(i)) {
			diff.push(i);
		}
	}

	// Check if we have found 2 differences
	// Then, check if that char is equal at
	// opposite positions between the strings
	if (
		diff.length === 2 &&
		A.charAt(diff[0]) === B.charAt(diff[1]) &&
		B.charAt(diff[0]) === A.charAt(diff[1])
	) {
		return true;
	} else {
		return false;
	}
};

let A = 'ab',
	B = 'ba';
console.log(buddyStrings(A, B)); // true

A = 'ab';
B = 'ab';
console.log(buddyStrings(A, B)); // false

A = 'aa';
B = 'aa';
console.log(buddyStrings(A, B)); // true

A = 'aaaaaaabc';
B = 'aaaaaaacb';
console.log(buddyStrings(A, B)); // true

A = '';
B = 'aa';
console.log(buddyStrings(A, B)); // false

A = 'abab';
B = 'abab';
console.log(buddyStrings(A, B)); // true
