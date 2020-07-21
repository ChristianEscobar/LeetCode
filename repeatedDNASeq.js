/**
 * Write a function to find all the 10-letter-long sequences (substrings)
 * that occur more than once in a DNA molecule.
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
	const results = [];
	const tracker = new Map();
	let currentSequence = '';
	let windowStart = 0;

	for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
		currentSequence = s.substring(windowStart, windowEnd + 1);
		if (currentSequence.length === 10) {
			if (tracker.has(currentSequence)) {
				tracker.set(currentSequence, tracker.get(currentSequence) + 1);

				// Only push it to the results the first time a duplicate is found
				if (tracker.get(currentSequence) === 2) {
					results.push(currentSequence);
				}
			} else {
				tracker.set(currentSequence, 1);
			}
			currentSequence = '';
			windowStart++;
		}
	}

	return results;
};

// const s = 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT';
const s = 'AAAAAAAAAAAA';

console.log(findRepeatedDnaSequences(s));
