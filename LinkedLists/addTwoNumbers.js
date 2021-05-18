const { ListNode, createList } = require('./utils/LinkedList');

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
const pushNodesIntoStack = function pushNodesIntoStack(stack, list) {
  let curNode = list;
  while (curNode) {
    stack.push(curNode.val);
    curNode = curNode.next;
  }
};

const getCarryDigit = function getCarryDigit(num) {
  return Math.floor(num / 10);
};

const getMinDigit = function getMinDigit(num) {
  return num % 10;
};

const processSum = function processSum(s1, s2) {
  let carry = 0;
  let result = null;
  let prevNode = null;

  while (s1.length > 0) {
    const currentSum = s1.pop() + (s2.pop() || 0) + carry;
    let curNode = null;
    if (currentSum >= 10) {
      carry = getCarryDigit(currentSum);
      curNode = new ListNode(getMinDigit(currentSum));
    } else {
      carry = 0;
      curNode = new ListNode(currentSum);
    }

    if (!result) {
      result = curNode;
      prevNode = result;
    } else {
      curNode.next = prevNode;
      result = curNode;
    }

    prevNode = curNode;
  }

  // Append any left over carry
  if (carry !== 0) {
    const carryNode = new ListNode(carry);
    carryNode.next = prevNode;
    result = carryNode;
  }

  return result;
};

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

  // Create two stacks
  const stack1 = [];
  const stack2 = [];

  // Push nodes into stack
  pushNodesIntoStack(stack1, l1);
  pushNodesIntoStack(stack2, l2);

  let finalResult = null;

  // Sum up lists
  if (stack1.length >= stack2.length) {
    finalResult = processSum(stack1, stack2);
  } else {
    finalResult = processSum(stack2, stack1);
  }

  return finalResult;
};

// const addTwoNumbers = function addTwoNumbers(l1, l2) {
//   if (l1 === null && l2 === null) {
//     return null;
//   }

//   if (l1 === null) {
//     return l2;
//   }

//   if (l2 === null) {
//     return l1;
//   }

//   const num1 = traverse(l1);
//   const num2 = traverse(l2);

//   const sum = BigInt(num1) + BigInt(num2);
//   const sumList = createList(sum);

//   return sumList;

//   function traverse(list) {
//     let number = '';
//     let curNode = list;
//     while (curNode !== null) {
//       number += curNode.val.toString();
//       curNode = curNode.next;
//     }
//     console.log(number);

//     return number;
//   }

//   function createList(num) {
//     const numStr = num.toString();
//     let head = null;
//     let prevNode = null;
//     for (let i = 0; i < numStr.length; i += 1) {
//       const curNode = new ListNode(parseInt(numStr[i], 10));
//       if (!head) {
//         head = curNode;
//         prevNode = head;
//       } else {
//         prevNode.next = curNode;
//       }

//       prevNode = curNode;
//     }

//     return head;
//   }
// };

const l1 = createList([7, 2, 4, 3]);
const l2 = createList([5, 6, 4]);
addTwoNumbers(l1, l2);
