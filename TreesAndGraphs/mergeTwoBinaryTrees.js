/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
	return traverse(t1, t2);
};

var traverse = function(t1, t2) {
	if(t1 === null) {
		return t2;
	} 
	
	if(t2 === null) {
		return t1;
	}
	t1.val += t2.val; 
	t1.left = traverse(t1.left, t2.left);
	t1.right = traverse(t1.right, t2.right);
	return t1;
} 

// Calculate the max depth
function maxDepth(node) {
	if(node === null) {
		return 0;
	} else {
		let lDepth = maxDepth(node.left);
		let rDepth = maxDepth(node.right);

		if (lDepth > rDepth) {
			return lDepth + 1;
		} else {
			return rDepth + 1;
		}
	}
}

function createTree1() {
	let node1 = new TreeNode(1);
	let node3 = new TreeNode(3);
	let node2 = new TreeNode(2);
	let node5 = new TreeNode(5);	

	node1.left = node3;
	node1.right = node2;
	node3.left = node5;

	return node1;
}

function createTree2() {
	let node2 = new TreeNode(2);
	let node1 = new TreeNode(1);
	let node3 = new TreeNode(3);
	let node4 = new TreeNode(4);
	let node7 = new TreeNode(7);
	
	node2.left = node1;
	node2.right = node3;
	node1.right = node4;
	node3.right = node7;

	return node2;
}

let t1 = createTree1();
let t2 = createTree2();
console.log(mergeTrees(t1, t2));