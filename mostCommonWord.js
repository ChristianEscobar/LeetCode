/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
	let re = /[!?',;.]/g;
	const updatedParagraph = paragraph.replace(re, ' ');
	const updatedParagraphArray = updatedParagraph.split(' ');

	const wordCountMap = new Map();

	// Create a word count Map
	updatedParagraphArray.forEach((value) => {
		if (value.length > 0) {
			const currentWord = value.toLowerCase();
			if (wordCountMap.has(currentWord)) {
				wordCountMap.set(currentWord, wordCountMap.get(currentWord) + 1);
			} else {
				wordCountMap.set(currentWord, 1);
			}
		}
	});

	// Remove banned words from word count Map
	banned.forEach((value) => {
		if (wordCountMap.has(value)) {
			wordCountMap.delete(value);
		}
	});

	// Find the word with the highest count
	let currentMax = 0;
	let maxWord = '';
	for (let key of wordCountMap.keys()) {
		const currentCount = wordCountMap.get(key);
		if (currentCount > currentMax) {
			currentMax = currentCount;
			maxWord = key;
		}
	}

	return maxWord;
};

// const paragraph = 'Bob hit a ball, the hit BALL flew far after it was hit.';
// const banned = ['hit'];

const paragraph = 'a, a, a, a, b,b,b,c, c';
const banned = ['a'];

console.log(mostCommonWord(paragraph, banned));
