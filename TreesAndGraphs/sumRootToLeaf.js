const { TreeNode } = require('./utils/utils');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
	var traverse = function(root) {
		if(root === null) {
			return;
		}
		number.push(root.val);
		traverse(root.left);
		traverse(root.right);
		if(!root.left && !root.right)
		{
			numbers.push(number.join(''));
		}
		number.pop();
	}

	var convertToBase10 = function() {
		numbers.forEach( (binary, index) => {
			const base10 = Number.parseInt(binary, 2);
			numbers[index] = base10;
		});
	}

	var sumUpNumbers = function() {
		return numbers.reduce( (accum, cur) => accum + cur);
	}

	if(root === null) {
		return;
	}
	
	const number = [];
	const numbers = [];
	
	traverse(root);
	convertToBase10();
	return sumUpNumbers();
};

const root = new TreeNode(1);
const node1 = new TreeNode(0);
const node2 = new TreeNode(1);
const node3 = new TreeNode(0);
const node4 = new TreeNode(1);
const node5 = new TreeNode(0);
const node6 = new TreeNode(1);

// node1.left = node3;
// node1.right = node4;

// node2.left = node5;
// node2.right = node6;

// root.left = node1;
// root.right = node2;

root.left = node2;

console.log(sumRootToLeaf(root));

