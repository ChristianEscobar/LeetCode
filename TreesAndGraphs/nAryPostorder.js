const { NaryNode } = require('./utils/utils');

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
	const order = [];
	
	if(root === null) {
		return order;
	}
	
	const childrenStack = [];
	const arrayPosStack = [];
	childrenStack.push(root.children);
	arrayPosStack.push(0);

	while(childrenStack.length > 0) {
		const arrayPos = arrayPosStack.pop();
		const children = childrenStack.pop();
		if (children && (arrayPos < children.length)) {
			if(arrayPos != 0) {
				order.push(children[arrayPos - 1].val);
			}
			const node = children[arrayPos];
			arrayPosStack.push(arrayPos + 1);
			childrenStack.push(children);
			childrenStack.push(node.children);
			arrayPosStack.push(0);
		} else if (children.length > 0 && (arrayPos === children.length)) {
			order.push(children[arrayPos - 1].val);
		}
	}

	// push the root val
	order.push(root.val);
	return order;
};

const root = new NaryNode(1, null);
const node2 = new NaryNode(2, null);
const node3 = new NaryNode(3, null);
const node4 = new NaryNode(4, null);
const node5 = new NaryNode(5, null);
const node6 = new NaryNode(6, null);
const node7 = new NaryNode(7, null);
const node8 = new NaryNode(8, null);
const node9 = new NaryNode(9, null);
const node10 = new NaryNode(10, null);
const node11 = new NaryNode(11, null);
const node12 = new NaryNode(12, null);
const node13 = new NaryNode(13, null);
const node14 = new NaryNode(14, null);

// node11.children = [node14];
// node7.children = [node11];
// node8.children = [node12];
// node9.children = [node13];
// node3.children = [node6, node7];
// node4.children = [node8];
// node5.children = [node9, node10];
// root.children = [node2, node3, node4, node5];
// console.log(postorder(root));


node3.children = [node5, node6];
root.children = [node3, node2, node4];

console.log(postorder(root));
