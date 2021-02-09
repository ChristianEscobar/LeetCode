const { TreeNode, createTree } = require('./utils/utils');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
	var traverse = function(root) {
		if(root === null) {
			return;
		}

		++depthCounter;

		traverse(root.left);
		traverse(root.right);

		highestDepth = Math.max(depthCounter, highestDepth);

		if(root) {
			--depthCounter;
		}	
	}

	let depthCounter = 0;
	let highestDepth = 0;

	if(root) {
		highestDepth = -1;
		traverse(root);
	}
	
	return highestDepth;
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

const root = createTree([1,2,3,4,null,null,5]);

console.log(maxDepth(root));