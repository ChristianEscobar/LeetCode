function stringSubsequence(str) {
  const result = [];

  function findSequences(s, ans) {
    if (s.length === 0) {
      result.push(ans);
      return;
    }

    findSequences(s.substring(1), ans + s.substring(0, 1));
    findSequences(s.substring(1), ans);
  }

  findSequences(str, '');
  return result;
}

console.log(stringSubsequence('abc'));
