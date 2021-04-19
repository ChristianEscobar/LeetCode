const { createTree, preorderTraversal } = require('./utils/utils');

function minDiffInBST(root) {
  let minDiff = Number.MAX_SAFE_INTEGER;
  let prevNode = null;

  function traverse(node) {
    if (node === null) {
      return 0;
    }

    traverse(node.left);
    if (prevNode !== null) {
      minDiff = Math.min(Math.abs(node.val - prevNode.val), minDiff);
    }
    prevNode = node;
    traverse(node.right);
  }

  traverse(root);
  return minDiff;
}

const tree = createTree([1, 0, 48, null, null, 12, 49]);
console.log(minDiffInBSTv2(tree));
