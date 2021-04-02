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

var minDiffInBSTv2 = function(root) {
	let result = Number.MAX_SAFE_INTEGER;
	let prev = null;
	
	const walk = (node) => {
			if(node.left) {
					walk(node.left);
			}
			
			result = Math.min(result, Math.abs(prev - node.val));
			prev = node.val;
			
			if(node.right) {
					walk(node.right);
			}
	}
	
	walk(root);
	return result;
};

const tree = createTree([1,0,48,null,null,12,49]);
console.log(minDiffInBSTv2(tree));
