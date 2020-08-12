/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {
	const results = [];
	if (A.length === 0 && B.length === 0) {
		return results;
	}

	const wordCounter = new Map();
	const arrayA = A.split(' ');
	const arrayB = B.split(' ');

	setWordCounter(arrayA);
	setWordCounter(arrayB);

	for (let word of wordCounter.keys()) {
		if (wordCounter.get(word) === 1) {
			results.push(word);
		}
	}

	function setWordCounter(array) {
		array.forEach((word) => {
			if (wordCounter.has(word)) {
				wordCounter.set(word, wordCounter.get(word) + 1);
			} else {
				wordCounter.set(word, 1);
			}
		});
	}

	return results;
};

const A = 'this apple is sweet',
	B = 'this apple is sour';
console.log(uncommonFromSentences(A, B)); // Output: ["sweet","sour"]
