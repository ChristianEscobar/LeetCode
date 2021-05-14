/* eslint-disable no-param-reassign */
const ListNode = require('./utils/ListNode');

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const getNodeCount = function getNodeCount(head) {
  let count = 0;
  while (head !== null) {
    count += 1;
    head = head.next;
  }

  return count;
};

const split = function split(head, step) {
  if (head === null) {
    return null;
  }

  for (let i = 1; head.next !== null && i < step; i += 1) {
    head = head.next;
  }

  const right = head.next;
  head.next = null;
  return right;
};

const sortList = function sortList(head) {
  if (head === null) {
    return null;
  }

  const nodeCount = getNodeCount(head);
  console.log(nodeCount);
};

const node4 = new ListNode(4, null);
const node2 = new ListNode(2, null);
const node1 = new ListNode(1, null);
const node3 = new ListNode(3, null);

node4.next = node2;
node2.next = node1;
node1.next = node3;

sortList(node4);
