// Definition for a binary tree node.
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}

 /**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
	return search(root, val);
};

const search = function(root, val) {
	if(root === null) {
		return root;
	} else if(root.val === val) {
		return root;
	} else if(val < root.val) {
		return search(root.left, val);
	} else {
		return search(root.right, val);
	}
}

const traverse = function(root) {
	if(root === null) {
		return null;
	}

	console.log(root.val);
	traverse(root.left);
	traverse(root.right);
}

const node4 = new TreeNode(4);
const node2 = new TreeNode(2);
const node7 = new TreeNode(7);
const node1 = new TreeNode(1);
const node3 = new TreeNode(3);

node2.left = node1;
node2.right = node3;

node4.left = node2;
node4.right = node7;

console.log(searchBST(node4, 2));
console.log(searchBST(node4, 5));