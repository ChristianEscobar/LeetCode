const { createTree } = require('./utils/utils');

/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
	return traverse(root, low, high, 0);
};

var traverse = function(root, low, high, sum) {
	if(root === null) {
		return sum;
	}

	if(isInRange(root.val, low, high)) {
		sum += root.val;
	}

	if(root.val >= low) {
		sum = traverse(root.left, low, high, sum);
	}
	
	if(root.val < high) {
		sum = traverse(root.right, low, high, sum)
	}

	return sum;
}

var isInRange = function(value, low, high) {
	if(value >= low && value <= high) {
		return true;
	}

	return false;
}

const root1 = createTree([10,5,15,3,7,null,18]);
console.log(rangeSumBST(root1, 7, 15));

const root2 = createTree([10,5,15,3,7,13,18,1,null,6]);
console.log(rangeSumBST(root2, 6, 10));