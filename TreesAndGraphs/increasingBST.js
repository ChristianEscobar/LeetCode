const { createTree, TreeNode, inorderTraversal } = require('./utils/utils');

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
	if(root === null) {
		return null;
	}

	let newTreeRootPtr = null;
	let nextNode = null;
	traverse(root);

	function traverse(root) {
		if(root === null) {
			return;
		}
	
		traverse(root.left);
		if(newTreeRootPtr === null) {
			newTreeRootPtr = root;
			nextNode = newTreeRootPtr;
		} else {
			nextNode.right = root;
			nextNode = root;
			nextNode.left = null;
		}
		traverse(root.right);
	
		return;
	}

	return newTreeRootPtr;
};

const root = createTree([2,1,4,null,null,3]);
let newRoot = increasingBST(root);

while(newRoot) {
	console.log(newRoot);
	newRoot = newRoot.right;
}