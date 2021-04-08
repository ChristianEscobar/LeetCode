const { TreeNode, createTree } = require('./utils/utils');

/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root) {
  const traverse = function (root) {
    if (root === null) {
      return;
    }

    ++depthCounter;

    traverse(root.left);
    traverse(root.right);

    highestDepth = Math.max(depthCounter, highestDepth);

    if (root) {
      --depthCounter;
    }
  };

  let depthCounter = 0;
  let highestDepth = 0;

  if (root) {
    highestDepth = -1;
    traverse(root);
  }

  return highestDepth;
};

const maxDepthV2 = function (root) {
  let highestDepth = 0;
  if (root === null) {
    return highestDepth;
  }
  const traverse = function (root, counter) {
    if (root === null) {
      return null;
    }

    counter++;
    highestDepth = Math.max(highestDepth, counter);

    traverse(root.left, counter);
    traverse(root.right, counter);
  };

  traverse(root, 0);
  return highestDepth;
};

const maxDepthV3 = function (root) {
  if (root === null) {
    return 0;
  }

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);
  const pick = leftDepth > rightDepth
    ? leftDepth + 1
    : rightDepth + 1;
  return pick;
};

// const root = new TreeNode(3);
// const node9 = new TreeNode(9);
// const node20 = new TreeNode(20);
// const node15 = new TreeNode(15);
// const node7 = new TreeNode(7);

// node20.left = node15;
// node20.right = node7;

// root.left = node9;
// root.right = node20;

const root = createTree([3, 9, 20, null, null, 15, 7]);

console.log(maxDepthV2(root));
