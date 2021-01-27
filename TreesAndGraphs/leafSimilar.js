const { createTree } = require('./utils/utils');

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

	console.log('leafValueSeq1', leafValueSeq1);
	console.log('leafValueSeq2', leafValueSeq2);

	return areIdentical(leafValueSeq1, leafValueSeq2);
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

var areIdentical = function(array1, array2) {
	// Check that both arrays have the same length
	if(array1.length != array2.length) {
		return false;
	}
	// Then check that both arrays have the same values
	for(let i=0; i < array1.length; i++) {
		if(array1[i] != array2[i]) {
			return false;
		}
	}

	return true;
}

const root1 = createTree([3,5,1,6,2,9,8,null,null,7,4]);
const root2 = createTree([3,5,1,6,7,4,2,null,null,null,null,null,null,9,11,null,null,8,10]);

console.log(leafSimilar(root1, root2));
