const { createTree, preorderTraversal } = require('./utils/utils');

function minDiffInBST(root) {
	if(root === null) {
		return 0;
	}

	let minDiff = Number.MAX_SAFE_INTEGER;

	function traverse(node, prevNode) {
		if(node === null) {
			return 0;
		}

		if(prevNode) {
			minDiff = Math.min(Math.abs(node.val - prevNode.val), minDiff);
		}

		traverse(node.left, node);
		traverse(node.right, node);
	}

	traverse(root, null);
	return minDiff;
}

const root = [90,69,null,49,89,null,52];
const treeRoot = createTree(root);
// console.log(treeRoot);
// preorderTraversal(treeRoot);
console.log(minDiffInBST(treeRoot));
