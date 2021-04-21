/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}

/**
 * Definition for a Node.
 */
function Node(val, children) {
  this.val = val;
 	this.children = children;
}

/**
 * Definition for a Node.
 */
function NaryNode(val, children) {
 	this.val = val;
 	this.children = children;
}

const createTree = function (array) {
  if (array.length === 0) {
    return null;
  }

  let root = null;
  let leftChildPos = 1;
  let rightChildPos = leftChildPos + 1;

  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      array[i] = new TreeNode(array[i]);
    }
  }

  for (let i = 0; i < array.length; i++) {
    const node = array[i];
    if (node) {
      // Go get left and right child
      const lChild = array[leftChildPos] ? array[leftChildPos] : null;
      const rChild = array[rightChildPos] ? array[rightChildPos] : null;
      node.left = lChild;
      node.right = rChild;

      if (i === 0) {
        root = node;
      }

      leftChildPos += 2;
      rightChildPos = leftChildPos + 1;
    }
  }

  return root;
};

const createNaryTree = function (array) {

};

const preorderTraversal = function (root) {
	 console.log(root.val);
	 preorderTraversal(root.left);
	 preorderTraversal(root.right);
};
const inorderTraversal = function (root) {
  if (root === null) {
    return;
  }

  inorderTraversal(root.left);
  console.log(root.val);
  inorderTraversal(root.right);
};

const postorderTraversal = function (root) {
  postorderTraversal(root.left);
  postorderTraversal(root.right);
  console.log(root.val);
};

const levelOrderTraversal = function (root) {
  if (root === null) {
    return null;
  }

  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    const node = queue.shift();
    console.log(node.val);
    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }
};

module.exports = {
  createTree,
  TreeNode,
  Node,
  NaryNode,
  preorderTraversal,
  inorderTraversal,
  postorderTraversal,
  levelOrderTraversal,
};
