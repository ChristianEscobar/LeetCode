const longestPalindrome = function (s) {
  if (s.length === 0) {
    return '';
  }

  if (s.length === 1) {
    return s;
  }

  function isPalindrome(s) {
    if (s.length === 0) {
      return false;
    }

    if (s.length === 1) {
      return true;
    }

    let start = 0;
    let end = s.length - 1;
    while (start <= end) {
      if (s[start] !== s[end]) {
        return false;
      }

      start += 1;
      end -= 1;
    }

    return true;
  }

  let maxLength = Number.MIN_SAFE_INTEGER;
  let maxPalindrome = '';
  for (let i = 0; i < s.length; i += 1) {
    let currentString = s[i];
    if (isPalindrome(currentString)) {
      if (currentString.length > maxLength) {
        maxLength = currentString.length;
        maxPalindrome = currentString;
      }
    }
    for (let j = i + 1; j < s.length; j += 1) {
      currentString += s[j];
      if (isPalindrome(currentString)) {
        if (currentString.length > maxLength) {
          maxLength = currentString.length;
          maxPalindrome = currentString;
        }
      }
    }
  }

  return maxPalindrome;
};

console.log(longestPalindrome('ac'));
