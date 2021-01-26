/**
 * Definition for a binary tree node.
 */ 
function TreeNode(val, left, right) {
	this.val = (val===undefined ? 0 : val)
	this.left = (left===undefined ? null : left)
	this.right = (right===undefined ? null : right)
}

const createTree = function(array) {
	if(array.length === 0) {
		return null;
	}

	const results = [];

	let root = null;
	let nextSetOfChildren = 1;
	
	for(let i=0; i<array.length; i++) {
		let node = new TreeNode(array[i]);
		
		// Go get left and right child
		let lChild = new TreeNode(array[i + nextSetOfChildren]);
		let rChild = new TreeNode(array[i + (nextSetOfChildren + 1)]);
		node.left = lChild;
		node.right = rChild;

		if(i === 0) {
			root = node;
		}

		nextSetOfChildren++;

		results.push(node);
	}
	 
	console.log(results);

	return root;
}

createTree([3,5,1,6,2,9,8,null,null,7,4]);