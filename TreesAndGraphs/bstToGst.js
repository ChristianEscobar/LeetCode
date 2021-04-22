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
 * @return {TreeNode}
 */
const bstToGst = function (root) {
  function traverseAndStore(node, arr) {
    if (node === null) {
      return;
    }

    traverseAndStore(node.left, arr);
    arr.push(node.val);
    traverseAndStore(node.right, arr);

    return arr;
  }

  function traverseAndConvert(node, valsToSum) {
    if (node === null) {
      return;
    }

    node.val = valsToSum[node.val];
    traverseAndConvert(node.left, valsToSum);
    traverseAndConvert(node.right, valsToSum);

    return node;
  }

  function calculateSums(arr) {
    const valuesToSum = {};
    let totalSum = 0;

    for (let i = arr.length - 1; i >= 0; i -= 1) {
      totalSum += arr[i];
      valuesToSum[arr[i]] = totalSum;
    }

    return valuesToSum;
  }

  const valuesArray = traverseAndStore(root, []);
  console.log(valuesArray);
  const valuesToSum = calculateSums(valuesArray);
  console.log(valuesToSum);
  const gst = traverseAndConvert(root, valuesToSum);

  return gst;
};
