const { createTree } = require('./utils/utils');

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const findTilt = function (root) {
  let totalTilt = 0;
  function traverse(node) {
    if (node === null) {
      return 0;
    }

    const leftResult = traverse(node.left);
    const rightResult = traverse(node.right);
    const tilt = Math.abs(leftResult - rightResult);
    totalTilt += tilt;

    return node.val + leftResult + rightResult;
  }

  traverse(root);
  return totalTilt;
};

const root = createTree([4, 2, 9, 3, 5, null, 7]);
console.log(findTilt(root));
