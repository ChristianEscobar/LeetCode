/**
 * @param {string} s
 * @return {string[]}
 */
const removeInvalidParentheses = function (s) {
  const isValidString = function isValidString(str) {
    let count = 0;
    for (let i = 0; i < str.length; i += 1) {
      const curChar = str[i];
      if (curChar === '(') {
        count += 1;
      } else if (curChar === ')') {
        count -= 1;
      }

      if (count < 0) {
        return false;
      }
    }

    return count === 0;
  };

  const isValidParentheses = function isValidParentheses(char) {
    return char === '(' || char === ')';
  };

  if (s.length === 0) {
    return [];
  }

  const result = [];
  const visited = {};
  const bfsQueue = [];
  let level = false;

  bfsQueue.push(s);
  visited[s] = 1;

  while (bfsQueue.length > 0) {
    const str = bfsQueue.shift();
    if (isValidString(str)) {
      result.push(str);
      level = true;
    }

    if (level) {
      continue;
    }

    for (let i = 0; i < str.length; i += 1) {
      const curChar = str[i];
      if (!isValidParentheses(curChar)) {
        continue;
      }
      // Remove a paren and add to queue
      const temp = str.substring(0, i) + str.substring(i + 1);
      if (!visited[temp]) {
        bfsQueue.push(temp);
        visited[temp] = 1;
      }
    }
  }

  return result;
};

const s = '()())()';
console.log(removeInvalidParentheses(s));

// s = '(a)())()';
// console.log(removeInvalidParentheses(s));

// s = ')(';
// console.log(removeInvalidParentheses(s));
