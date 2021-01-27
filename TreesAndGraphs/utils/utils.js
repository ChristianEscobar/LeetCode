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

	let root = null;
	let leftChildPos = 1;
	let rightChildPos = leftChildPos + 1;
	
	for(let i=0; i < array.length; i++) {
		if(array[i]) {
			array[i] = new TreeNode(array[i]);
		}
	}


	for(let i=0; i < array.length; i++) {
		let node = array[i];
		if(node) {
			// Go get left and right child
			let lChild = array[leftChildPos] ? array[leftChildPos] : null;
			let rChild = array[rightChildPos] ? array[rightChildPos] : null;
			node.left = lChild;
			node.right = rChild;

			if(i === 0) {
				root = node;
			}

			leftChildPos +=2;
			rightChildPos = leftChildPos + 1;

		}
	}

	return root;
}

module.exports = {
	createTree,
}