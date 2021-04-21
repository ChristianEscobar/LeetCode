const { createTree, TreeNode } = require('./utils/utils');

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

const getTargetCopy = function (original, cloned, target) {
  // traverse both trees until target is found?
  function traverse(node, resultArr) {
    if (node === null) {
      return null;
    }

    resultArr.push(node);
    traverse(node.left, resultArr);
    traverse(node.right, resultArr);

    return resultArr;
  }

  function search(arr, matchThis) {
    let foundPos = -1;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i].val === matchThis.val) {
        foundPos = i;
        break;
      }
    }

    return foundPos;
  }

  const arrOrig = traverse(original, []);
  const arrClone = traverse(cloned, []);
  const pos = search(arrOrig, target);

  return arrClone[pos];
};

const root = createTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const clone = createTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const target = new TreeNode(3);
console.log(getTargetCopy(root, clone, target));
