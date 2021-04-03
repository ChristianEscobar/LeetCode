/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
const countMatches = function (items, ruleKey, ruleValue) {
  function ruleKeyToIndex(ruleKey) {
    if (ruleKey === 'type') {
      return 0;
    } if (ruleKey === 'color') {
      return 1;
    } if (ruleKey === 'name') {
      return 2;
    }
  }

  if (items.length === 0) {
    return 0;
  }

  let count = 0;
  const ruleKeyIndex = ruleKeyToIndex(ruleKey);
  for (let i = 0; i < items.length; i++) {
    if (items[i][ruleKeyIndex] === ruleValue) {
      count++;
    }
  }

  return count;
};

const items = [['phone', 'blue', 'pixel'], ['computer', 'silver', 'lenovo'], ['phone', 'gold', 'iphone']];
const ruleKey = 'color';
const ruleValue = 'silver';

countMatches(items, ruleKey, ruleValue);
