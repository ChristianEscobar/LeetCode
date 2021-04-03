/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function (accounts) {
  let currentMax = Number.MIN_SAFE_INTEGER;

  accounts.forEach((arr) => {
    const value = arr.reduce((accum, value) => accum + value);
    currentMax = Math.max(currentMax, value);
  });

  return currentMax;
};

const accounts = [[1, 2, 3], [3, 2, 1]];
console.log(maximumWealth(accounts));

const accounts2 = [[1, 5], [7, 3], [3, 5]];
console.log(maximumWealth(accounts2));

const accounts3 = [[2, 8, 7], [7, 1, 3], [1, 9, 5]];
console.log(maximumWealth(accounts3));
