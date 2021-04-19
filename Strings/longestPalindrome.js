/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  if (s.length < 2) {
    return s;
  }

  let resultStart;
  let resultLength = Number.MIN_SAFE_INTEGER;

  function expandRange(str, begin, end) {
    while (begin >= 0 && end < str.length && str[begin] === str[end]) {
      begin -= 1;
      end += 1;
    }

    if ((end - begin - 1) > resultLength) {
      resultStart = begin + 1;
      resultLength = end - begin - 1;
    }
  }

  for (let i = 0; i < s.length; i += 1) {
    expandRange(s, i, i); // odd
    expandRange(s, i, i + 1); // even
  }

  return s.substring(resultStart, resultStart + resultLength);
};

const string = 'babad';
console.log(longestPalindrome(string));
