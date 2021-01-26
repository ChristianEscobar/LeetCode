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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    return traverse(root, null);
};

var traverse = function(root, parentNode) {
	let result = false;
	if(root === null) {
		return true;
	}

	if(parentNode && (root.val != parentNode.val)) {
		return false;
	}

	result = traverse(root.left, root);
	
	if(result) {
		result = traverse(root.right, root);
	}
	
	return result;
}

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node5 = new TreeNode(5);
let node6 = new TreeNode(6);

node2.left = node4;
node2.right = node5;
node3.right = node6;
node1.left = node2;
node1.right = node3;

console.log(isUnivalTree(node1));

