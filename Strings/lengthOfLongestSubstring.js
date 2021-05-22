const lengthOfLongestSubstring = function (s) {
  if (s.length === 0) {
    return 0;
  }
  const sArray = s.split('');
  const substringBuilder = [];
  let longestLength = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < sArray.length; i += 1) {
    const char = sArray[i];
    while (substringBuilder.includes(char)) {
      substringBuilder.shift();
    }
    // if (substringBuilder.includes(char)) {
    //   // const charIndex = substringBuilder.indexOf(char);
    //   // Remove character from substring
    //   // substringBuilder.splice(charIndex, 1);
    // }

    substringBuilder.push(char);
    longestLength = Math.max(longestLength, substringBuilder.length);
  }

  return longestLength;
};

console.assert(lengthOfLongestSubstring('abcabcbb') === 3, 'Expected 3 for abcabcbb');
console.assert(lengthOfLongestSubstring('bbbbb') === 1, 'Expected 1 for bbbbb');
console.assert(lengthOfLongestSubstring('pwwkew') === 3, 'Expected 3 for pwwkew');
