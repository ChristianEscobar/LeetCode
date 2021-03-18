const { createTree } = require('./utils/utils');

/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
	if(t === null) {
		return null;
	}
	
	const buffer = [];
	preOrderTraversal(t);

	function preOrderTraversal(node) {
		if(node === null) {
			return null;
		}
		buffer.push('(');
		buffer.push(node.val);
		buffer.push(')');
		buffer.push('(');
		preOrderTraversal(node.left);
		buffer.push(')');
		buffer.push('(');
		preOrderTraversal(node.right);
		buffer.push(')');
	}

	return buffer.join('');

};

const root = createTree([1,2,3,4]);
console.log(tree2str(root));