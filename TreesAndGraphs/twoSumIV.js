const { createTree, levelOrderTraversal } = require('./utils/utils');

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
	if(root === null) {
		return false;
	}
	
	const data = {}
	if(root === null) {
		return null;
	}

	const queue = [];
	queue.push(root);
	while(queue.length > 0) {
		const node = queue.shift();
		data[node.val] = 1;
		if(node.left) {
			queue.push(node.left);
		}
		
		if(node.right) {
			queue.push(node.right);
		}
	}

	const arrOfKeys = Object.keys(data);
	for(let i = 0; i < arrOfKeys.length; i++) {
		const value = parseInt(arrOfKeys[i], 10);
		const target = k - value;
		if(target !== value && data.hasOwnProperty(target)) {
			return true;
		}
	}

	return false;
};

// const root1 = createTree([5,3,6,2,4,null,7]);
// let k = 9;
// console.log(findTarget(root1, k));

// const root2 = createTree([5,3,6,2,4,null,7]);
// k = 28;
// console.log(findTarget(root2, k));

// const root3 = createTree([2,1,3]);
// k = 4;
// console.log(findTarget(root3, k));

// const root4 = createTree([2,1,3]);
// k = 1;
// console.log(findTarget(root4, k));

// const root5 = createTree([2,1,3]);
// k = 3;
// console.log(findTarget(root5, k));

const root6 = createTree([1]);
k = 2;
console.log(findTarget(root6, k));
