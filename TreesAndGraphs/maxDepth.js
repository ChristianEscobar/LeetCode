const { NaryNode } = require('./utils/utils');

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
	var traverse = function(root) {
		if(root === null) {
			return;
		}

		if(root.children.length > 0) {
			++depthCounter;
			for(let i=0; i < root.children.length; i++) {
				traverse(root.children[i]);
			}
			highestDepth = Math.max(depthCounter, highestDepth);
			--depthCounter;
		}
	}

	let depthCounter = 1;
	let highestDepth = 1;

	if(root === null) {
		highestDepth = 0;
	}

	traverse(root);
	return highestDepth;
};

const root = new NaryNode(1);
const node3 = new NaryNode(3);
const node2 = new NaryNode(2);
const node4 = new NaryNode(4);
const node5 = new NaryNode(5);
const node6 = new NaryNode(6);
const node7 = new NaryNode(7);
const node8 = new NaryNode(8);
const node9 = new NaryNode(9);
const node10 = new NaryNode(10);
const node11 = new NaryNode(11);
const node12 = new NaryNode(12);
const node13 = new NaryNode(13);
const node14 = new NaryNode(14);

node3.children = [node5, node6];
root.children = [node3, node2, node4];

// node11.children = [node14];
// node7.children = [node11];
// node8.children = [node12];
// node9.children = [node13];
// node3.children = [node6, node7];
// node4.children = [node8];
// node5.children = [node9, node10];
// root.children = [node2, node3, node4, node5];

console.log(maxDepth(root));