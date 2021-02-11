const { createTree } = require('./utils/utils');

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function (root) {
	const averages = [];

	if (root === null) {
		return averages;
	}

	let queue = [];
	queue.push(root);

	while(queue.length > 0) {
		let sum = 0;
		let count = 0;

		const tempQueue = [];
		while(queue.length > 0) {
			const curNode = queue.shift();
			sum += curNode.val;
			count++;
			if(curNode.left) {
				tempQueue.push(curNode.left);
			}
			if(curNode.right) {
				tempQueue.push(curNode.right);
			}
		}
		queue = tempQueue;
		averages.push(sum * 1.0 / count);
	}


	return averages;
};

const root = new createTree([3,null,30,10,null,null,15,null,45]);

console.log(averageOfLevels(root));