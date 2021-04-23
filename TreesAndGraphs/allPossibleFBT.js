const { TreeNode } = require('./utils/utils');

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const	allPossibleFBT = function (n) {
  if (n === 1) {
    return [new TreeNode(0)];
  }

  const ans = [];

  // Odd numbers of n only
  for (let i = 1; i < n; i += 2) {
    const leftTrees = allPossibleFBT(i);
    const rightTrees = allPossibleFBT(n - i - 1); // 1 is the current node

    leftTrees.forEach((left) => {
      rightTrees.forEach((right) => {
        const root = new TreeNode(0);
        root.left = left;
        root.right = right;

        ans.push(root);
      });
    });
  }

  return ans;
};

allPossibleFBT(7);
