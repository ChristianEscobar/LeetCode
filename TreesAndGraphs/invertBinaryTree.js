/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
 	this.left = (left===undefined ? null : left)
 	this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
	if(root === null) {
		return null;
	}

	let temp = root.left;
	root.left = root.right;
	root.right = temp;

	invertTree(root.left);
	invertTree(root.right);

	return root;
};

// let root = new TreeNode(4);
// let node2 = new TreeNode(2);
// let node7 = new TreeNode(7);
// let node1 = new TreeNode(1);
// let node3 = new TreeNode(3);
// let node6 = new TreeNode(6);
// let node9 = new TreeNode(9);

// node2.left = node1;
// node2.right = node3;

// node7.left = node6;
// node7.right = node9;

// root.left = node2;
// root.right = node7;

// console.log(root);
console.log(invertTree(null));
// console.log(root);