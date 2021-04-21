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
 * @return {boolean}
 */
const isBalanced = function (root) {
  const findHeight = function (node) {
    if (node === null) {
      return -1;
    }

    const leftHeight = findHeight(node.left);
    const rightHeight = findHeight(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  };

  if (root === null) {
    return true;
  }

  // Finding height of each subtree not the entire tree
  const result = Math.abs(findHeight(root.left) - findHeight(root.right)) <= 1;
  return result && isBalanced(root.left) && isBalanced(root.right);
};
