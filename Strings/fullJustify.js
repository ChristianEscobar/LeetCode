/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const fullJustify = function (words, maxWidth) {
  const result = [];
  let remainingWidth = maxWidth;
  let currentString = '';
  for (let i = 0; i < words.length; i += 1) {
    const nextWord = words[i];
    const nextWordLength = nextWord.length;
    if (nextWordLength <= remainingWidth) {
      currentString += nextWord;
      currentString += ' ';
      remainingWidth -= nextWordLength;
    } else {
      result.push(currentString.trimEnd());
      remainingWidth = maxWidth;
      currentString = '';
      i -= 1;
    }
  }

  result.push(currentString.trimEnd());

  console.log(result);
  return result;
};

const justify = function (words, maxWidth) {
  const spacesToFill = maxWidth - words.join(' ').length;
};

const words = ['This', 'is', 'an', 'example', 'of', 'text', 'justification.'];
const maxWidth = 16;
fullJustify(words, maxWidth);
