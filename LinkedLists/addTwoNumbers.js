const { ListNode } = require('./utils/ListNode');

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function addTwoNumbers(l1, l2) {
  if (l1 === null && l2 === null) {
    return null;
  }

  if (l1 === null) {
    return l2;
  }

  if (l2 === null) {
    return l1;
  }

  const num1 = traverse(l1);
  const num2 = traverse(l2);

  const sum = BigInt(num1) + BigInt(num2);
  const sumList = createList(sum);

  return sumList;

  function traverse(list) {
    let number = '';
    let curNode = list;
    while (curNode !== null) {
      number += curNode.val.toString();
      curNode = curNode.next;
    }
    console.log(number);

    return number;
  }

  function createList(num) {
    const numStr = num.toString();
    let head = null;
    let prevNode = null;
    for (let i = 0; i < numStr.length; i += 1) {
      const curNode = new ListNode(parseInt(numStr[i], 10));
      if (!head) {
        head = curNode;
        prevNode = head;
      } else {
        prevNode.next = curNode;
      }

      prevNode = curNode;
    }

    return head;
  }
};
