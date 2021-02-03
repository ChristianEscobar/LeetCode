const { NaryNode } = require('./utils/utils');

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
	const order = [];
	
	if(root === null) {
		return order;
	}
	
	const childrenStack = [];
	const arrayPosStack = [];
	order.push(root.val);
	childrenStack.push(root.children);
	arrayPosStack.push(0);

	while(childrenStack.length > 0) {
		const arrayPos = arrayPosStack.pop();
		const children = childrenStack.pop();
		if(children && (arrayPos < children.length)) {
			const node = children[arrayPos];
			order.push(node.val);
			arrayPosStack.push(arrayPos + 1);
			childrenStack.push(children);
			childrenStack.push(node.children);
			arrayPosStack.push(0);
		}
	}

	return order;
};

const root = new NaryNode(1, null);
const node2 = new NaryNode(2, null);
const node3 = new NaryNode(3, null);
const node4 = new NaryNode(4, null);
const node5 = new NaryNode(5, null);
const node6 = new NaryNode(6, null);
const node7 = new NaryNode(7, null);

node3.children = [node6, node7];
root.children = [node2, node3, node4, node5];

preorder(root);





