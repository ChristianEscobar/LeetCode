/**
 * @param {number} N
 * @return {boolean}
 */
const divisorGame = function (N) {
  function findX(num) {
    const x = num - 1;
    if (x < 0) {
      return -1;
    }

    if (x < N && x >= 0) {
      if (N % x === 0) {
        return x;
      }
    }

    return findX(x);
  }

  let doesAliceWin = false;
  let turnCount = 1;

  while (N > 0) {
    const num = findX(N);

    // Check if it is Alice's turn, her turns will be odd numbers
    if (num === -1) {
      if (turnCount % 2 === 0) {
        doesAliceWin = true;
      } else {
        doesAliceWin = false;
      }
    } else if (turnCount % 2 === 0) {
      doesAliceWin = false;
    } else {
      doesAliceWin = true;
    }

    N = Math.sign(num) * (N - num);
    turnCount++;
  }

  return doesAliceWin;
};

console.log(divisorGame(3));
