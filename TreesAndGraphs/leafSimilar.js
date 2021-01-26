/**
 * Definition for a binary tree node.
 */
 function TreeNode(val, left, right) {
 	this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
 }
 
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
	if(root1 === null || root2 === null) {
		return false;
	}
	
	const leafValueSeq1 = traverse(root1, []);
	const leafValueSeq2 = traverse(root2, []);

	console.log(leafValueSeq1);
	console.log(leafValueSeq2);
};

var traverse = function(root, leafValueSeq) {
	if(root === null) {
		return;
	}

	if(isLeafNode(root)) {
		leafValueSeq.push(root.val);
	}
	traverse(root.left, leafValueSeq);
	traverse(root.right, leafValueSeq);

	return leafValueSeq;
}

var isLeafNode = function(node) {
	if(node.left === null && node.right === null) {
		return true;
	}

	return false;
}

let root1 = new TreeNode(3);
let node5 = new TreeNode(5);
let node1 = new TreeNode(1);
let node6 = new TreeNode(6);
let node2 = new TreeNode(2);
let node9 = new TreeNode(9);
let node8 = new TreeNode(8);
let node7 = new TreeNode(7);
let node4 = new TreeNode(4);

node2.left = node7;
node2.right = node4;

node5.left = node6;
node5.right = node2;

node1.left = node9;
node1.right = node8;

root1.left = node5;
root1.right = node1;

let root2 = new TreeNode(3);
let node5_2 = new TreeNode(5);
let node1_2 = new TreeNode(1);
let node6_2 = new TreeNode(6);
let node2_2 = new TreeNode(2);
let node9_2 = new TreeNode(9);
let node8_2 = new TreeNode(8);
let node7_2 = new TreeNode(7);
let node4_2 = new TreeNode(4);

node2_2.left = node9_2;
node2_2.right = node8_2;

node5_2.left = node6_2;
node5_2.right = node7_2;

node1_2.left = node4_2;
node1_2.right = node2_2;

root2.left = node5_2;
root2.right = node1_2;


leafSimilar(root1, root2);
