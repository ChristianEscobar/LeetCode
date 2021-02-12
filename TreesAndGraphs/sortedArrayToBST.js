const { TreeNode } = require('./utils/utils');

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
	return createBST(nums, 0, nums.length - 1);
};

var createBST = function(nums, start, end) {
	if(end < start) {
		return null;
	}

	const mid = Math.ceil((start + end) / 2);
	const n = new TreeNode(nums[mid]);
	n.left = createBST(nums, start, mid - 1);
	n.right = createBST(nums, mid + 1, end);
	return n;
}

 const array = [-10,-3,0,5,9];
 console.log(sortedArrayToBST(array));